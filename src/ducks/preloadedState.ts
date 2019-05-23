const fakeProducts = [...Array(40).keys()].map((n) => {
  const m = n + 1
  return {
    id: m,
    name: `Product ${m}`,
    img: `https://dummyimage.com/150x150/fff/000&text=${m}`,
  }
})

export const preloadedState = {
  products: fakeProducts,
}
