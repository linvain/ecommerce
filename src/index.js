import ReactDOM from 'react-dom'
import React, {Fragment} from 'react'
import { Provider, useSelector } from 'react-redux'

import { ProductCardList } from './components/ProductCardList'
import { Header } from './components/Header'
import { store } from './ducks/configureStore'

import './index.scss'

const App = () => {
  const location = useSelector(store => store.location, undefined)
  return (
    location === '/' && (
      <Fragment>
        <Header/>
        <ProductCardList/>
      </Fragment>
    )
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  window.document.getElementById('react-root')
)
