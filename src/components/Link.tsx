import React from 'react'
import { history } from '../ducks/history'

interface IProps {
  children: any
  className: string
  to: string
}

const push = (to: string) => history.push(to)

export const Link = ({ children, className, to }: IProps) => {
  return (
    <a
      onClick={() => push(to)}
      className={className}>
      {children}
    </a>
  )
}
