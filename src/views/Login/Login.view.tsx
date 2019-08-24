import * as React from 'react'

import { LoginContainer, LoginFormContainer } from './Login.styles'
import { LogInForm } from './components'

export const Login: React.SFC = () => (
  <LoginContainer>
    <LoginFormContainer>
      <LogInForm />
    </LoginFormContainer>
  </LoginContainer>
)
