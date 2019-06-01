import { history } from '../routing/history'

const getFakeProducts = () => {
	const allIds = [...Array(40).keys()].map(n => n + 1)
	const byId = allIds.reduce((products, id) => {
		const price = 50 + 100 * Math.random()
		products[id] = {
			id,
			name: `Product ${id}`,
			img: `https://loremflickr.com/500/500?random=${id}`,
			price,
			priceString: price.toFixed(0) + ' $'
		}
		return products
	}, {})

	return {
		allIds,
		byId,
	}
}

export const preloadedState = {
	products: getFakeProducts(),
	location: history.location.pathname,
}
