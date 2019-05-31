import { useSelector } from 'react-redux'
import React, { Fragment } from 'react'
import { Header } from './Header'
import { MainColumn } from './MainColumn'
import { ProductPage } from './pages/ProductPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const parseLocation = location => {
  const arr = location.split('/')
  const section = arr[1] || 'home'
  const value = arr[2] || undefined
  return [
    section,
    value,
  ]
}

export const App = () => {
  const location = useSelector(state => state.location)
  const [section, value] = parseLocation(location)
  return (
    <Fragment>
      <MainColumn>
        <Header/>
        {
          {
            home: <HomePage/>,
            products: <ProductPage id={value}/>,
          }[section] || <NotFoundPage/>
        }
      </MainColumn>
    </Fragment>
  )
}
