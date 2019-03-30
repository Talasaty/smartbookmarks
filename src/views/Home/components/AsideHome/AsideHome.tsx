import * as React from 'react'
import { AsideWrapper } from './AsideHome.styles'

interface Prop {
  show: boolean
}
export const AsideHome: React.SFC<Prop> = ({ children, show }) => (
  <AsideWrapper show={show}>{children}</AsideWrapper>
)
