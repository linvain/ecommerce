import React from 'react'
import {FaShoppingCart, FaUserCircle} from 'react-icons/fa'

import {Link} from '../../routing/components/Link'
import styles from './Header.scss'

export const Header = () => (
	<div className={styles.header}>
		<div>
			<Link to={'/'}>
				{'Simple Store'}
			</Link>
		</div>

		<div className={styles.right}>
			<Link className={styles.icon} to={'/cart'}>
				<FaUserCircle/>
			</Link>
			<Link className={styles.icon} to={'/cart'}>
				<FaShoppingCart/>
			</Link>
		</div>
	</div>
)
