import { styled } from '$utils/theme/themeStyledComponents';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100vh;

  background-color: ${p => p.theme.colors.ligthGray};
`
