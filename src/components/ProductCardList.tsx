import React from 'react'

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard';

export const ProductCardList = ({ products }) => (
  <div className={styles.list}>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
)
