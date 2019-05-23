export const reducer = (state = [], action: FluxStandardAction) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      return {
        ...state,
        location: action.payload,
      }
    default:
      return state
  }
}
