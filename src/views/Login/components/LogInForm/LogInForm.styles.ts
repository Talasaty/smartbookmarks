import { styled } from '$utils/theme/themeStyledComponents';

export const LogInContainer = styled.div`
  position: relative;

  min-width: 3 ${p => p.theme.sizes.huge};
  max-width: 400px;

  height: 500px;

  margin: 50px;

  background-color: ${p => p.theme.colors.white};

  border-radius: 1 ${p => p.theme.sizes.xTiny};

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px ${p => p.theme.sizes.small} 0 rgba(0, 0, 0, 0.19);

  @media only screen and (max-width: 769px) {
    min-width: 0px;
    margin: 0px;
  }
`
export const LogInHeader = styled.div`
  width: 100%;
  height: 100px;

  background-color: ${p => p.theme.colors.blue};

  border-top-left-radius: 1 ${p => p.theme.sizes.xTiny};
  border-top-right-radius: 1 ${p => p.theme.sizes.xTiny};
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
  margin-right: ${p => p.theme.sizes.tiny};
`

export const ButtonSignInContainer = styled.div`
  position: absolute;
  bottom: 0px;
  margin-left: -100px;

  left: 50%;
`
