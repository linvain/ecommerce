import React from 'react'

import styles from './Header.scss'
import { Link } from './Link'

export const Header = () => (
  <div className={styles.header}>
    <div/>
    <Link className={styles.name} to={'/'}>Simple Store</Link>
    <Link className={styles.cart} to={'/cart'}>Cart</Link>
  </div>
)
