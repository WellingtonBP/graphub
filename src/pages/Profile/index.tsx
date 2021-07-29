import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router'

import Repositories from '../../components/Repositories'
import Loading from '../../components/Loading'
import {
  ProfileHeader,
  Avatar,
  ProfileInfo,
  SocialInfo,
  ErrorMessage
} from './styles'

const query = gql`
  query User($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`

const Profile: React.FC = () => {
  const profileName = useParams<{ profilename: string }>().profilename
  const { loading, error, data } = useQuery(query, {
    variables: { login: profileName }
  })

  return (
    <>
      {loading && <Loading />}
      {!loading && error && (
        <ErrorMessage>
          {error.message.startsWith(
            'Could not resolve to a User with the login of'
          )
            ? 'Profile not found'
            : 'Something went wrong'}
        </ErrorMessage>
      )}

      {!error && data && (
        <>
          <ProfileHeader>
            <ProfileInfo>
              <Avatar src={data.user.avatarUrl} alt={profileName} />
              <div>
                <h1>{data.user.name}</h1>
                <p>{data.user.bio}</p>
              </div>
            </ProfileInfo>
            <SocialInfo>
              <li>
                <a
                  href={`https://github.com/${profileName}?tab=followers`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.user.followers.totalCount} followers
                </a>
              </li>
              <li>
                <a
                  href={`https://github.com/${profileName}?tab=following`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.user.following.totalCount} following
                </a>
              </li>
              <li>
                <a
                  href={`https://github.com/${profileName}?tab=stars`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.user.starredRepositories.totalCount} stars
                </a>
              </li>
            </SocialInfo>
          </ProfileHeader>
          <Repositories profileName={profileName} />
        </>
      )}
    </>
  )
}

export default Profile
