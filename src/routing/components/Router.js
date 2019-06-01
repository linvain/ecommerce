import React from 'react'
import { useSelector } from 'react-redux'

import { ProductCardList } from '../../products/components/ProductCardList'
import { ProductPage } from '../../products/components/ProductPage'

const parseLocation = location => {
	const arr = location.split('/')
	const section = arr[1] || 'home'
	const value = arr[2] || undefined
	return [
		section,
		value,
	]
}

export const Router = () => {
	const location = useSelector(state => state.location)
	const [section, value] = parseLocation(location)
	return {
		home:       <ProductCardList/>,
		products:   <ProductPage id={value}/>,
	}[section] || <div>404 Not Found</div>
}