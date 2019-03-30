import * as React from 'react'
import {
  LogInContainer,
  LogInHeader,
  LogInInputContainer,
  LabelContainer,
  ButtonLoginContainer,
  ButtonSignInContainer,
  ForgotYourPassword,
} from './LogInForm.styles'

import { Input } from '$components/Input'
import { Text } from '$components/Text'
import { Button } from '$components/Button'

export class LogInForm extends React.Component {
  render() {
    return (
      <LogInContainer>
        <LogInHeader />
        <LogInInputContainer>
          <LabelContainer>
            <Text weight="medium" type="span">
              Usuario
            </Text>
          </LabelContainer>
          <Input
            backgroundColor="white"
            borderColor="gray"
            color="text"
            type="free"
          />
        </LogInInputContainer>
        <LogInInputContainer>
          <LabelContainer>
            <Text weight="medium" type="span">
              Contraseña
            </Text>
          </LabelContainer>
          <Input
            backgroundColor="white"
            borderColor="gray"
            color="text"
            type="free"
          />
          <ForgotYourPassword>
            <Text type="span" color="blue" size="h6">
              ¿Has olvidado la contraseña?
            </Text>
          </ForgotYourPassword>
        </LogInInputContainer>
        <ButtonLoginContainer>
          <Button backgroundColor="blue2">
            <Text weight="small" type="span" color="white">
              Login
            </Text>
          </Button>
        </ButtonLoginContainer>
        <ButtonSignInContainer>
          <Button type="big">
            <Text type="span" color="blue" size="h6">
              Registrate aquí
            </Text>
          </Button>
        </ButtonSignInContainer>
      </LogInContainer>
    )
  }
}
