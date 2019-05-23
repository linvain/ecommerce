import React from 'react'
import { useDispatch } from 'react-redux'

interface IProps {
  children: any
  className: string
  to: string
}

const useChangeLocation = (to: string) => {
  const dispatch = useDispatch()
  const changeLocation = () => dispatch({
    type: 'CHANGE_LOCATION',
    payload: to,
  })
  return changeLocation
}

export const Link = ({ children, className, to }: IProps) => {
  const changeLocation = useChangeLocation(to)
  return (
    <a
      onClick={changeLocation}
      className={className}>
      {children}
    </a>
  )
}
