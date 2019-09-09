import { styled } from '$utils/theme/themeStyledComponents'

interface Props {
  backgroundId?: string
}

export const Canvas = styled.div<Props>`
  width: 100%;
  height: 100vh;

  background: ${p => `url(${p.backgroundId})`} no-repeat center center fixed;
  background-size: cover;
`
