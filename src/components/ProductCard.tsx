import React from 'react'

import styles from './ProductCard.scss'

export const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <img className={styles.image} src={product.img}/>
    <div className={styles.name}>{product.name}</div>
  </div>
)
