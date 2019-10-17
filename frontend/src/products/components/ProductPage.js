import React from 'react'

import {useAddToCart} from '../../cart/hooks/useAddToCart'
import {useProduct} from '../hooks/useProduct'
import styles from './ProductPage.scss'

export const ProductPage = ({id}) => {
	const {img, name, priceString} = useProduct(id)
	const addToCart = useAddToCart()
	return (
		<div className={styles.container}>
			<img src={img}/>
			<div>
				<div>{name}</div>
				<div>{priceString}</div>
				<div onClick={() => addToCart(id)}>{'Add to cart'}</div>
			</div>
		</div>
	)
}
