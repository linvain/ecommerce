import ReactDOM from 'react-dom'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'

import { client } from './client'
import { ProductCardList } from './components/ProductCardList'
import { Header } from './components/Header'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Header/>
    <ProductCardList/>
  </ApolloProvider>,
  window.document.getElementById('react-root')
)
