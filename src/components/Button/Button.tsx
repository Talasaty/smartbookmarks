import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/theme/colors'

export interface SizesButon {
  tiny: string
  normal: string
  big: string
  free: string
}

const sizesButon: SizesButon = {
  tiny: '50px',
  normal: '100px',
  big: '200px',
  free: '100%',
}

const ButtonStyle = styled.button.attrs({})<Props>`
  width: ${p => (p.type ? sizesButon[p.type] : '')};


  margin: 5px;
  padding: ${p => p.theme.sizes.xTiny} ${p => p.theme.sizes.tiny};

  background-color: ${p =>
    p.backgroundColor ? colors[p.backgroundColor] : 'transparent'};

  border: ${p =>
    p.borderColor ? `1px solid ${colors[p.borderColor]}` : 'none'};

  border-radius: 10px;

  outline: 0;

  :hover {
    cursor: pointer;
  }
`
interface Props {
  children?: React.ReactNode
  backgroundColor?:
    | 'ligthGray'
    | 'darkGray'
    | 'white'
    | 'black'
    | 'text'
    | 'blue'
    | 'blue2'
    | 'lighthBlue'
    | 'darkBlue'
  borderColor?:
    | 'ligthGray'
    | 'darkGray'
    | 'white'
    | 'black'
    | 'text'
    | 'blue'
    | 'blue2'
    | 'lighthBlue'
    | 'darkBlue'
  type?: 'tiny' | 'normal' | 'big' | 'free'
  onClick?: () => void
}
export const Button: React.SFC<Props> = ({
  children,
  backgroundColor,
  borderColor,
  type,
  onClick
}) => (
  <ButtonStyle
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    type={type}
    onClick={onClick}
  >
    {children}
  </ButtonStyle>
)
