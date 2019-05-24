import React from 'react'

import styles from './Header.scss'
import { Link } from './Link'

export const Header = () => (
  <Link className={styles.header} to={'/'}>
    Simple Store
  </Link>
)
