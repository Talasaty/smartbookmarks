import { styled } from '$utils/theme/themeStyledComponents'
import picture from '$imgs/bookMarkLogin.jpg'
import pictureResponsive from '$imgs/loginMobile.jpg'

export const LoginContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 100vh;

  background: ${`url(${picture})`};

  background-size: cover;

  @media only screen and (max-width: 769px) {
    background: ${`url(${pictureResponsive})`};
  }
`

export const LoginFormContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 50%;
  height: 100vh;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`
