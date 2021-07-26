import React from 'react'

import logo from '../../assets/images/logo.svg'

import { Container, Logo, SearchForm, Input } from './styles'

const Search: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="Graphub" />
      <SearchForm>
        <Input type="text" placeholder="Search for a profile" />
      </SearchForm>
    </Container>
  )
}

export default Search
