import React from 'react'

interface IProps {
  children: any
  className: string
}

export const Link = ({ children, className }: IProps) => {
  const changeLocation = (to: string) => {console.log(to)}
  return (
    <a
      onClick={() => changeLocation('/')}
      className={className}>
      {children}
    </a>
  )
}
