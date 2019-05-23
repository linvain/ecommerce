import React from 'react'
import { useMutation } from 'react-apollo-hooks';

import { CHANGE_LOCATION } from '../queries/CHANGE_LOCATION';

interface IProps {
  children: any
  className: string
}

export const Link = ({ children, className }: IProps) => {
  const changeLocation = useMutation(CHANGE_LOCATION);
  return (
    <a
      onClick={() => changeLocation({ variables: { to: '/' } })}
      className={className}>
      {children}
    </a>
  )
}
