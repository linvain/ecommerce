import React from 'react'

import styles from './MainColumn.scss'

export const MainColumn = ({ children }) => (
  <div className={styles.mainColumn}>{children}</div>
)
