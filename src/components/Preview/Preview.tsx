import * as React from 'react'
import { PreviewContainer } from './Preview.style'

interface Props {
  img: string
}
export const Preview: React.FC<Props> = ({ img }) => (
  <PreviewContainer src={img} />
)
