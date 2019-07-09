import { styled } from '$utils/theme/themeStyledComponents';

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  height: ${p => p.theme.sizes.huge};
  width: 100%;

  background-color: ${p => p.theme.colors.blue};
  box-shadow: 0 4px 2px -2px ${p => p.theme.colors.darkGray};

  z-index: 10;
`
