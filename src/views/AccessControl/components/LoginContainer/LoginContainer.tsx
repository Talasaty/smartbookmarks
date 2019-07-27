import * as React from 'react'
import { LoginWrapper } from './LoginContainer.styles'

interface Props {
  children: React.ReactNode
}
export const LoginContainer: React.FC<Props> = ({ children }) => (
  <LoginWrapper>{children}</LoginWrapper>
)
