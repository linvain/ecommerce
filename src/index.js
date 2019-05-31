import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'

import { App } from './components/App'
import { store } from './ducks/configureStore'

ReactDOM.render(
	<Provider store={store}>
		<IconContext.Provider value={{ className: 'react-icons' }}>
			<App/>
		</IconContext.Provider>
	</Provider>,
	window.document.getElementById('react-root')
)
