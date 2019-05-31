import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { IconContext } from 'react-icons'

import { store } from './ducks/configureStore'
import {App} from "./components/App"

import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <App/>
    </IconContext.Provider>
  </Provider>,
  window.document.getElementById('react-root')
)
