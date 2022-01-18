import { ReactNode } from 'react'

import { Loader } from '../Loader'
import { StyleButton } from './styles'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isLoading?: boolean
  children: ReactNode
}

function Button({ onClick, isLoading, children }: Props) {
  return (
    <StyleButton disabled={isLoading} onClick={onClick}>
      {isLoading ? <Loader /> : children}
    </StyleButton>
  )
}

export default Button
