import React from 'react'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'

const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  return {
    id: m,
    name: `Product ${m}`,
    img: `https://dummyimage.com/150x150/fff/000&text=${m}`,
    __typename: 'Product'
  }
})

export const ProductCardList = () => {
  const products = fakeProducts
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
