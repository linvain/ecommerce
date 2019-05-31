import { history } from '../routing/history'

const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  return {
    id: String(m),
    name: `Product ${m}`,
    img: `https://loremflickr.com/500/500?random=${m}`,
  }
})

export const preloadedState = {
  products: fakeProducts,
  location: history.location.pathname,
}
