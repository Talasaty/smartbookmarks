import { styled } from '$utils/theme/themeStyledComponents'

export const LoginWrapper = styled.div`
  position: relative;
  z-index: 10;
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
