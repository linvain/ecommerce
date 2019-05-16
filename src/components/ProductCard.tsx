import React from 'react'

import styles from './ProductCard.scss'

interface IProps {
  product: Product
}

export const ProductCard = ({ product }: IProps) => (
  <div className={styles.card}>
    <img className={styles.image} src={product.img}/>
    <div className={styles.name}>{product.name}</div>
  </div>
)
