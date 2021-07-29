import React, { FormEvent } from 'react'
import { useHistory } from 'react-router'

import logo from '../../assets/images/logo.svg'

import { Container, Logo, SearchForm, Input } from './styles'

const Search: React.FC = () => {
  const history = useHistory()

  const searchProfileHandler = (evt: FormEvent) => {
    evt.preventDefault()
    const profileName = new FormData(evt.target as HTMLFormElement).get(
      'profileName'
    )

    if (profileName) {
      history.push(`/${profileName}`)
    }
  }

  return (
    <Container>
      <Logo src={logo} alt="Graphub" />
      <SearchForm onSubmit={searchProfileHandler}>
        <Input
          type="text"
          placeholder="Search for a profile"
          name="profileName"
        />
      </SearchForm>
    </Container>
  )
}

export default Search
