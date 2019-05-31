import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from 'react-icons'
import { Provider } from 'react-redux'

import { Header } from './components/Header'
import { MainColumn } from './components/MainColumn'
import { Router } from './components/Router'
import { store } from './ducks/configureStore'

ReactDOM.render(
	<Provider store={store}>
		<IconContext.Provider value={{ className: 'react-icons' }}>
			<MainColumn>
				<Header/>
				<Router/>
			</MainColumn>
		</IconContext.Provider>
	</Provider>,
	window.document.getElementById('react-root')
)
