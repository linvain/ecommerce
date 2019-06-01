import React from 'react'

import { useProduct } from './useProduct'

export const ProductPage = ({ id }) => {
	const { img, name, priceString } = useProduct(id)
	return null
}
