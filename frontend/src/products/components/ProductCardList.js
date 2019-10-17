import React from 'react'
import {useSelector} from 'react-redux'

import {ProductCard} from './ProductCard'
import styles from './ProductCardList.scss'

export const ProductCardList = () => {
	const allIds = useSelector(state => state.products.allIds)
	return (
		<div className={styles.list}>
			{allIds.map(id => <ProductCard key={id} id={id}/>)}
		</div>
	)
}
