import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          user: {
            merge(existing = {}, incoming: any) {
              return { ...existing, ...incoming }
            }
          }
        }
      }
    }
  }),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_GRAPHQL_TOKEN}`
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
