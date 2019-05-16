import React from 'react'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'

interface IProps {
  products: Product[]
}

export const ProductCardList = ({ products }: IProps) => (
  <div className={styles.list}>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
)
