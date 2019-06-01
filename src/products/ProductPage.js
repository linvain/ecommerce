import React from 'react'

import styles from './ProductPage.scss'
import { useAddToCart } from './useAddToCart'
import { useProduct } from './useProduct'

export const ProductPage = ({ id }) => {
	const { img, name, priceString } = useProduct(id)
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
