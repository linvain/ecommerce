import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'

export const ProductCardList = () => {
  const products = useSelector(store => store.products, undefined)
  return (
    <div className={styles.list}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}
