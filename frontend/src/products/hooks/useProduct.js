import {useSelector} from 'react-redux'

/**
 * Get product by id
 * @param {Product.id} id
 * @returns {Product}
 */
export const useProduct = id => /** @type {Product} */ useSelector(state => state.products.byId[id])
