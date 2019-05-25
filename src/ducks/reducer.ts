import {combineReducers} from 'redux'

const locationReducer = (state: string = null, action: FluxStandardAction) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      const location: string = action.payload
      return location
    default:
      return state
  }
}

const productsReducer = (state: Product[] = [], action: FluxStandardAction) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return state
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  location: locationReducer,
  products: productsReducer,
})
