import {useDispatch} from 'react-redux'

import {addToCart} from '../cartActions'

export const useAddToCart = () => {
	const dispatch = useDispatch()
	return id => dispatch(addToCart(id))
}
