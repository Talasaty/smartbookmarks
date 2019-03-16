import * as React from 'react'
import { EditButtonStyle, EditImg } from './Edit.style'
import edit from '$icons/edit.svg'

export const EditButton: React.SFC = () => (
  <EditButtonStyle>
    <EditImg src={edit} />
  </EditButtonStyle>
)
