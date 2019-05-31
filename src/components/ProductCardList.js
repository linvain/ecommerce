import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'

export const ProductCardList = () => {
  const idList = useSelector(store => store.products.allIds, undefined)
  return (
    <div className={styles.list}>
      {idList.map(id => (
        <ProductCard
          key={id}
          id={id}
        />
      ))}
    </div>
  )
}
