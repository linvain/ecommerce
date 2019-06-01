import React from 'react'
import { useSelector } from 'react-redux'

import { ProductCard } from '../products/ProductCard'
import { ProductCardList } from '../products/ProductCardList'

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
		products:   <ProductCard id={value}/>,
	}[section] || <div>404 Not Found</div>
}
