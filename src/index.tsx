import ReactDOM from 'react-dom'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks';

import { client } from './client';
import { ProductCardList } from './components/ProductCardList';
import { Header } from './components/Header';

const fakeProducts = [...Array(20).keys()].map((n) => {
  const m = n + 1
  return {
    id: m,
    name: `Product ${m}`,
    img: `https://lorempixel.com/150/150?random=${m}`,
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Header/>
    <ProductCardList products={fakeProducts}/>
  </ApolloProvider>,
  window.document.getElementById('react-root')
)
