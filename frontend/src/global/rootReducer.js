import { combineReducers } from 'redux'

import { productsReducer } from '../products/productsReducer'
import { locationReducer } from '../routing/locationReducer'

export const rootReducer = combineReducers({
	location: locationReducer,
	products: productsReducer,
})
