import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import { history } from '../routing/history'
import { preloadedState } from './preloadedState'
import { rootEpic } from './rootEpic'
import { rootReducer } from './rootReducer'
import {changeLocation} from '../routing/locationActions'

const configureStore = () => {
	const epicMiddleware = createEpicMiddleware()

	const middlewares = [epicMiddleware]
	const middlewareEnhancer = applyMiddleware(...middlewares)

	const enhancers = [middlewareEnhancer]
	const composedEnhancers = composeWithDevTools({})(...enhancers)

	const store = createStore(rootReducer, preloadedState, composedEnhancers)

	epicMiddleware.run(rootEpic)

	return store
}

export const store = configureStore()

history.listen(location => store.dispatch(changeLocation(location.pathname)))
