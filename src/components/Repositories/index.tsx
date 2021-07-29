import React, { useEffect, useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

import forkIcon from '../../assets/images/forkIcon.svg'
import starIcon from '../../assets/images/starIcon.svg'
import Loading from '../Loading'
import { RepositoriesCards, RepositoryCard, ForksAndStars } from './styles'

const query = gql`
  query User($login: String!, $endCursor: String) {
    user(login: $login) {
      repositories(
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
        after: $endCursor
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          name
          description
          forkCount
          updatedAt
          stargazerCount
          languages(last: 1) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`

type Repository = {
  hasNextPage: boolean
  endCursor?: string
  nodes: {
    name: string
    description: string
    forkCount: number
    updatedAt: string
    stargazerCount: number
    language: string
  }[]
}

type RepositoriesProps = {
  profileName: string
}

const Repositories: React.FC<RepositoriesProps> = ({ profileName }) => {
  const [repositories, setRepositories] = useState<Repository>({
    hasNextPage: false,
    nodes: []
  })
  const [getRepositories, { loading, data, error }] = useLazyQuery(query, {
    variables: { login: profileName, endCursor: null }
  })

  useEffect(() => {
    getRepositories()
  }, [getRepositories])

  useEffect(() => {
    if (repositories.hasNextPage) {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          getRepositories({
            variables: {
              // @ts-ignore
              endCursor: repositories.endCursor
            }
          })
        }
      })
      intersectionObserver.observe(
        document.querySelector('#sentinel') as Element
      )
      return () => intersectionObserver.disconnect()
    }
  }, [
    getRepositories,
    repositories.endCursor,
    profileName,
    repositories.hasNextPage
  ])

  useEffect(() => {
    if (data?.user.repositories) {
      setRepositories(current => ({
        hasNextPage: data.user.repositories.pageInfo.hasNextPage,
        nodes: current.nodes.concat(data.user.repositories.nodes),
        endCursor: data.user.repositories.pageInfo.endCursor
      }))
    }
  }, [data?.user.repositories])

  return (
    <>
      {!error && (
        <>
          <RepositoriesCards>
            {repositories.nodes.map((repository: any) => (
              <RepositoryCard key={repository.name}>
                <div>
                  <a
                    href={`https://github.com/${profileName}/${repository.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {repository.name}
                  </a>
                  <ForksAndStars>
                    <a
                      href={`https://github.com/${profileName}/${repository.name}/network/members`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={forkIcon} alt="Forks" /> {repository.forkCount}
                    </a>
                    <a
                      href={`https://github.com/${profileName}/${repository.name}/stargazers`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={starIcon} alt="Stars" />{' '}
                      {repository.stargazerCount}
                    </a>
                  </ForksAndStars>
                </div>
                <p>{repository.description}</p>
                <div>
                  <span>{repository.languages.nodes[0]?.name}</span>
                  <span>
                    Updated on{' '}
                    {new Date(repository.updatedAt).toLocaleString('en-US', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </RepositoryCard>
            ))}
          </RepositoriesCards>
          {(repositories?.hasNextPage || loading) && (
            <Loading
              id="sentinel"
              style={{ width: '3rem', height: '3rem', margin: '5rem auto' }}
            />
          )}
        </>
      )}
    </>
  )
}

export default Repositories
