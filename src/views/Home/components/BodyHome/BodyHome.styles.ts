import { styled } from '$utils/theme/themeStyledComponents'

export const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`

export const BodyHomeAside = styled.div`
  width: 20%;
  margin: ${p => p.theme.sizes.small} 0;
`
