import * as React from 'react'
import { styled } from '$utils/theme/themeStyledComponents'

const CanvasContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
`

interface Props {
  children: React.ReactNode
}

export const Canvas: React.FC<Props> = ({ children }) => (
  <CanvasContainer>{children}</CanvasContainer>
)
