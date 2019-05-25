import { history } from './history'

const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  return {
    id: String(m),
    name: `Product ${m}`,
    img: `https://dummyimage.com/150x150/fff/000&text=${m}`,
  }
})

export const preloadedState: State = {
  products: fakeProducts,
  location: history.location.pathname,
}
