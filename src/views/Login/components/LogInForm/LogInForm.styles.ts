import { styled } from '$utils/theme/themeStyledComponents'
import { Button } from '$components/Button'
import { Text } from '$components/Text'

export const LogInContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 30vw;

  background-color: transparent;

  @media only screen and (max-width: 769px) {
    width: 95vw;
  }
`

export const NextButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${p => p.theme.sizes.small};
`

export const NextButton = styled(Button).attrs({
  type: 'big',
  backgroundColor: 'pink',
})`
  min-width: 240px;
`

export const TextLogin = styled(Text).attrs({
  color: 'white',
  size: 'h2',
  typeText: 'span',
  marginTop: 'tiny',
  marginBottom: 'tiny',
  marginLeft: 'small',
  marginRight: 'small',
  weight: 'semiBold',
})``

export const SignInButtonContainer = styled.div`
  position: absolute;
  top: ${p => p.theme.sizes.small};
  right: ${p => p.theme.sizes.small};
`

export const TextSignIn = styled(Text).attrs({
  color: 'white',
  size: 'h3',
  typeText: 'span',
  marginLeft: 'tiny',
  marginRight: 'tiny',
  marginTop: 'xTiny',
  marginBottom: 'xTiny',
  weight: 'semiBold',
})``

export const SignInButton = styled(Button).attrs({
  type: 'normal',
  backgroundColor: 'ligthGray',
})`
  min-width: 100px;
`
export const HelpButtonContainer = styled.div`
  position: absolute;
  bottom: ${p => p.theme.sizes.small};
  right: ${p => p.theme.sizes.small};
`

export const HelpButton = styled(Button).attrs({
  type: 'normal',
  backgroundColor: 'lighthBlue',
})`
  min-width: 100px;
`

export const TextHelp = styled(Text).attrs({
  color: 'white',
  size: 'h3',
  typeText: 'span',
  marginLeft: 'xTiny',
  marginRight: 'xTiny',
  marginTop: 'xTiny',
  marginBottom: 'xTiny',
  weight: 'semiBold',
})``
