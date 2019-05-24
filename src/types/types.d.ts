interface Product {
  id: string
  name: string
  img: string
}

// https://github.com/redux-utilities/flux-standard-action
interface FluxStandardAction {
  type: string
  payload?: any
  error?: boolean
  meta?: any
}
