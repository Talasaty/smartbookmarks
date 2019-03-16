import * as React from 'react'
import { PictureContainer } from './Picture.style'

interface Props {
  img: string
}
export const Picture: React.SFC<Props> = ({ img }) => (
  <PictureContainer src={img} />
)
