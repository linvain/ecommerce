import { getFakeProducts } from '../products/getFakeProducts'
import { history } from '../routing/history'

export const preloadedState = {
	products: getFakeProducts(),
	location: history.location.pathname,
}
