import { history } from '../routing/history'

const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  const price = 50 + 100 * Math.random()
  return {
    id: String(m),
    name: `Product ${m}`,
    img: `https://loremflickr.com/500/500?random=${m}`,
    price,
    priceString: price.toFixed(0) + ' $'
  }
})

export const preloadedState = {
  products: fakeProducts,
  location: history.location.pathname,
}
