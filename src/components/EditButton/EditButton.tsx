import * as React from 'react'
import edit from '$icons/edit.svg'
import editDark from '$icons/editDark.svg'
import { styled } from '$utils/theme/themeStyledComponents'
import { colors, ColorsOptions } from '$utils/theme/colors'

interface Props {
  isOver?: boolean
  backgroundColor?: ColorsOptions
  type?: 'round' | 'none'
  color?: 'white' | 'dark'
}

const EditButtonStyle = styled.button.attrs({})<Props>`
  float: right;

  opacity: ${p => (p.isOver ? 1 : 0)};

  height: 30px;
  width: 30px;

  z-index: 5;

  color: blue;

  cursor: pointer;

  margin: 3px;
  padding: ${p => p.theme.sizes.xTiny};

  border: 1px solid
    ${p => (p.backgroundColor ? colors[p.backgroundColor] : 'transparent')};

  border-radius: ${p => (p.type === 'round' ? '50%' : '0')};

  background-color: ${p =>
    p.backgroundColor ? colors[p.backgroundColor] : 'transparent'};

  box-shadow: ${p =>
    p.type === 'round'
      ? `0 ${p.theme.sizes.tiny} ${
          p.theme.sizes.small
        } rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`
      : 'none'};

  outline: none;
  :hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 769px) {
    opacity: 0.3;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`

export const EditButton: React.FC<Props> = ({
  isOver,
  backgroundColor,
  type,
  color,
}) => (
  <EditButtonStyle
    backgroundColor={backgroundColor}
    isOver={isOver}
    type={type}
  >
    <img src={color === 'dark' ? editDark : edit} />
  </EditButtonStyle>
)
