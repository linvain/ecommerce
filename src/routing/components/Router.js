import React from 'react'

import { ProductCardList } from '../../products/components/ProductCardList'
import { ProductPage } from '../../products/components/ProductPage'
import { useLocation } from '../hooks/useLocation'

export const Router = () => {
	const [section, value] = useLocation()
	return {
		home:       <ProductCardList/>,
		products:   <ProductPage id={value}/>,
	}[section] || <div>404 Not Found</div>
}
