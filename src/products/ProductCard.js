import React from 'react'

import { Link } from '../routing/Link'
import styles from './ProductCard.scss'
import { useProduct } from './useProduct'

export const ProductCard = ({ id }) => {
	const { img, name, priceString } = useProduct(id)
	return (
		<Link className={styles.card} to={'/products/' + id}>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={img}/>
			</div>
			<div className={styles.name}>
				<div>{name}</div>
				<div>{priceString}</div>
			</div>
		</Link>
	)
}
