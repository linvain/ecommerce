import { useDispatch } from 'react-redux'

export const useAddToCart = () => {
	const dispatch = useDispatch()
	const addToCart = id => dispatch({
		type: 'ADD_TO_CART',
		payload: id,
	})
	return addToCart
}
