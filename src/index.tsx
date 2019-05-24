import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'

import { ProductCardList } from './components/ProductCardList'
import { Header } from './components/Header'
import { store } from './ducks/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <Header/>
    <ProductCardList/>
  </Provider>,
  window.document.getElementById('react-root')
)
