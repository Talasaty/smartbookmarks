import * as React from 'react'
import { CanvasContainer, Bubbles } from './Canvas.styles'
interface Props {
  children: React.ReactNode
}

export const Canvas: React.FC<Props> = ({ children }) => {
  let bubbles = new Array(10)

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i] = i
  }

  return (
    <CanvasContainer>
      {children}
      {bubbles.map(value => (
        <Bubbles key={value} />
      ))}
    </CanvasContainer>
  )
}
