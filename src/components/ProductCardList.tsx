import React from 'react'
import { useQuery } from 'react-apollo-hooks';

import styles from './ProductCardList.scss'
import { ProductCard } from './ProductCard'
import { GET_PRODUCTS } from '../queries/GET_PRODUCTS';

interface IProps {
  products: Product[]
}

const _ProductCardList = ({ products }: IProps) => (
  <div className={styles.list}>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
)

export const ProductCardList = () => {
  console.log('kek')
  const { data, error, loading } = useQuery(GET_PRODUCTS)
  if (loading || error) return null
  return <_ProductCardList products={data.products}/>
}
