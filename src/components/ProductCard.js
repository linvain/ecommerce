import React from 'react'

import styles from './ProductCard.scss'
import { Link } from './Link'

export const ProductCard = ({ product }) => (
  <Link className={styles.card} to={'/' + product.id}>
    <img className={styles.image} src={product.img}/>
    <div className={styles.name}>{product.name}</div>
  </Link>
)
