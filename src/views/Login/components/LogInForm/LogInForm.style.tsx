import styled from 'styled-components'

export const LogInContainer = styled.div`
  position: relative;

  min-width: 360px;
  max-width: 400px;

  height: 500px;

  margin: 50px;

  background-color: ${p => p.theme.colors.white};

  border-radius: 15px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 769px) {
    min-width: 0px;
    margin: 0px;
  }
`
export const LogInHeader = styled.div`
  width: 100%;
  height: 100px;

  background-color: ${p => p.theme.colors.blue};

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

export const LogInInputContainer = styled.div`
  margin: 30px 10px;
`

export const LabelContainer = styled.div`
  float: right;
  margin-right: 10px;

  opacity: 0.6;
`

export const ForgotYourPassword = styled(LabelContainer)`
  cursor: pointer;
`

export const ButtonLoginContainer = styled.div`
  display: flex;

  justify-content: flex-end;

  margin-top: 10px;
`

export const ButtonSignInContainer = styled.div`
  position: absolute;
  bottom: 0px;
  margin-left: -100px;

  left: 50%;
`
