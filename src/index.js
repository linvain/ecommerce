import ReactDOM from 'react-dom'
import React, {Fragment} from 'react'
import { Provider, useSelector } from 'react-redux'
import { IconContext } from 'react-icons'

import { ProductCardList } from './components/ProductCardList'
import { Header } from './components/Header'
import { store } from './ducks/configureStore'

import './index.scss'

const App = () => {
  const location = useSelector(store => store.location, undefined)
  return (
    <Fragment>
      <Header/>
      {location === '/' && <ProductCardList/>}
    </Fragment>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <App/>
    </IconContext.Provider>
  </Provider>,
  window.document.getElementById('react-root')
)
