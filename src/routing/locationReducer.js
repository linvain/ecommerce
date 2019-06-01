import {CHANGE_LOCATION} from './locationActions'

export const locationReducer = (state = null, { type, payload }) => {
	switch (type) {
		case CHANGE_LOCATION: return payload.location
		default:              return state
	}
}
