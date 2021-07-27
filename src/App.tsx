import React from 'react'
import { Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'

import Search from './pages/Search'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      <Route path="/" exact component={Search} />
      <Route path="/:profilename" component={Profile} />
      <GlobalStyles />
    </>
  )
}

export default App
