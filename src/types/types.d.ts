interface Product {
  id: string
  name: string
  img: string
  price: number
  priceString: string
}

// https://github.com/redux-utilities/flux-standard-action
interface FluxStandardAction {
  type: string
  payload?: any
  error?: boolean
  meta?: any
}

interface State {
  location: string
  products: Product[]
}
