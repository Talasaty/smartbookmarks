import { styled } from '$utils/theme/themeStyledComponents';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;

  width: 100%;

  min-height: 100vh;

  background-color: ${p => p.theme.colors.ligthGray};

  @media only screen and (max-width: 769px) {
    flex-direction: column;
  }
`
