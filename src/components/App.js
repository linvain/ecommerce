import {useSelector} from "react-redux"
import React, {Fragment} from "react"
import {Header} from "./Header"
import {ProductCardList} from "./ProductCardList"
import {MainColumn} from "./MainColumn"

export const App = () => {
  const location = useSelector(store => store.location, undefined)
  return (
    <Fragment>
      <MainColumn>
        <Header/>
        {location === '/' && <ProductCardList/>}
      </MainColumn>
    </Fragment>
  )
}
