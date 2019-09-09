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
import { withRouter, withRouterProps } from 'react-router-dom'

class LogInFormRaw extends React.Component<withRouterProps> {
  render() {
    return (
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={() => {
          // TODO quitar esto cuando se securice la web
          this.props.history.push('/home')
        }}
        render={() => (
          <>
            <SignInButtonContainer>
              <SignInButton onClick={() => this.props.history.push('/signin')}>
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
              <HelpButton onClick={() => this.props.history.push('/help')}>
                <TextHelp>Ayuda</TextHelp>
              </HelpButton>
            </HelpButtonContainer>
          </>
        )}
      />
    )
  }
}

export const LogInForm = withRouter(LogInFormRaw)
