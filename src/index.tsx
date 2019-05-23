import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { ProductCardList } from './components/ProductCardList'
import { Header } from './components/Header'

const store = createStore(x => x)

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <ProductCardList/>
  </Provider>,
  window.document.getElementById('react-root')
)
