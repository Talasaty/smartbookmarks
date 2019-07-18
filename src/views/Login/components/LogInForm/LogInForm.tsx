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
import { Formik, Form } from 'formik'

export class LogInForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
        render={() => (
          <Form>
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
                  typeInput="free"
                  type="text"
                  name="userName"
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
                  typeInput="free"
                  type="text"
                  name="password"
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
          </Form>
        )}
      />
    )
  }
}
