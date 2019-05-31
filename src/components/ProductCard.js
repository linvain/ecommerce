import React from 'react'

import styles from './ProductCard.scss'
import { Link } from './Link'

export const ProductCard = ({ product }) => (
  <Link className={styles.card} to={'/' + product.id}>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={product.img}/>
    </div>
    <div className={styles.name}>
      <div>{product.name}</div>
      <div>{product.priceString}</div>
    </div>
  </Link>
)
