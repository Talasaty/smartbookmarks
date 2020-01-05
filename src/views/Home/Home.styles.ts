import { styled } from '$utils/theme/themeStyledComponents'
import picture from '$imgs/bookMarkLogin.jpg'
import pictureResponsive from '$imgs/loginMobile.jpg'

export const Canvas = styled.div`
  width: 100%;
  height: 100vh;

  background-size: cover;

  background: ${`url(${picture})`};

  @media only screen and (max-width: 769px) {
    background: ${`url(${pictureResponsive})`};
  }
`
