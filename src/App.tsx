import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import Search from './pages/Search'

function App() {
  return (
    <>
      <Route path="/" exact component={Search} />
      <GlobalStyles />
    </>
  )
}

export default App
