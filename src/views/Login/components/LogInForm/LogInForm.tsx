import * as React from 'react'
import {
  LogInContainer,
  NextButtonContainer,
  NextButton,
  TextLogin,
  SignInButtonContainer,
  SignInButton,
  TextSignIn,
  HelpButtonContainer,
  HelpButton,
  TextHelp,
} from './LogInForm.styles'

import { Formik, Form } from 'formik'
import { InputFiled } from 'src/formiksComponents/InputFiled/InputField'

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
          <>
            <SignInButtonContainer>
              <SignInButton>
                <TextSignIn>Registrate</TextSignIn>
              </SignInButton>
            </SignInButtonContainer>
            <Form>
              <LogInContainer>
                <InputFiled
                  name="emailUser"
                  backgroundColor="white"
                  paddingBottom="tiny"
                  paddingRight="small"
                  paddingLeft="small"
                  paddingTop="tiny"
                  fontSize="h3"
                  type="email"
                  placeholder="Usuario"
                  color="darkGray"
                />
                <InputFiled
                  name="passlUser"
                  backgroundColor="white"
                  paddingBottom="tiny"
                  paddingRight="small"
                  paddingLeft="small"
                  paddingTop="tiny"
                  fontSize="h3"
                  type="password"
                  placeholder="Contraseña"
                  color="darkGray"
                />
              </LogInContainer>
              <NextButtonContainer>
                <NextButton>
                  <TextLogin>Continuar</TextLogin>
                </NextButton>
              </NextButtonContainer>
            </Form>
            <HelpButtonContainer>
              <HelpButton>
                <TextHelp>Ayuda</TextHelp>
              </HelpButton>
            </HelpButtonContainer>
          </>
        )}
      />
    )
  }
}
