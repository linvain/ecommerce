import React from 'react'

import styles from './ProductCard.scss'
import { Link } from './Link';

interface IProps {
  product: Product
}

export const ProductCard = ({ product }: IProps) => (
  <Link className={styles.card}>
    <img className={styles.image} src={product.img}/>
    <div className={styles.name}>{product.name}</div>
  </Link>
)
