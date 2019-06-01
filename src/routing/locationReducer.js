export const locationReducer = (state = null, action) => {
	switch (action.type) {
	case 'CHANGE_LOCATION':
		return action.payload
	case 'KEK':
		return state
	default:
		return state
	}
}
