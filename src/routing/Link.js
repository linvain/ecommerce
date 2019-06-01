import React from 'react'

import { push } from './push'

export const Link = ({ children, className, to }) => (
	<a
		onClick={() => push(to)}
		className={className}>
		{children}
	</a>
)
