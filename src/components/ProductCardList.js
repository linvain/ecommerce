import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'

export const ProductCardList = () => {
  const allIds = useSelector(state => state.products.allIds)
  return (
    <div className={styles.list}>
      {allIds.map(id => <ProductCard key={id} id={id} />)}
    </div>
  )
}
