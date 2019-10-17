import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {IconContext} from 'react-icons'
import {Provider} from 'react-redux'

import {Header} from './global/components/Header'
import {MainColumn} from './global/components/MainColumn'
import {store} from './global/configureStore'
import {Router} from './routing/components/Router'

ReactDOM.render(
	<Provider store={store}>
		<IconContext.Provider value={{className: 'react-icons'}}>
			<MainColumn>
				<Header/>
				<Router/>
			</MainColumn>
		</IconContext.Provider>
	</Provider>,
	window.document.getElementById('react-root'),
)
