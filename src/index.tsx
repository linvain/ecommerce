import ReactDOM from 'react-dom'
import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks';

import { client } from './client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>Hello, World!</div>
  </ApolloProvider>,
  window.document.getElementById('react-root')
)
