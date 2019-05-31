import { combineReducers } from 'redux'

const locationReducer = (state = null, action) => {
	switch (action.type) {
	case 'CHANGE_LOCATION':
		return action.payload
	case 'KEK':
		return state
	default:
		return state
	}
}

const productsReducer = (state = [], action) => {
	switch (action.type) {
	case 'KEK':
		return state
	case 'LOL':
		return state
	default:
		return state
	}
}

export const rootReducer = combineReducers({
	location: locationReducer,
	products: productsReducer,
})
