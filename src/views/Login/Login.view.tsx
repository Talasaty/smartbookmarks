import * as React from 'react'
import { LogInForm } from './components'
import { LoginContainer } from './Login.styles'

export const Login: React.SFC = () => (
  <LoginContainer>
    <LogInForm />
  </LoginContainer>
)
