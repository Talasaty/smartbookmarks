import * as React from 'react'

import { colors, ColorsOptions } from '$utils/theme/colors'
import { styled } from '$utils/theme/themeStyledComponents'

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

type typeOptions = 'tiny' | 'normal' | 'big' | 'free'

const ButtonStyle = styled.button.attrs({})<Props>`
  min-width: ${p => (p.typeButton ? sizesButon[p.typeButton] : '')};

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
  backgroundColor?: ColorsOptions
  borderColor?: ColorsOptions
  typeButton?: typeOptions
  onClick?: () => void
}
export const Button: React.FC<Props> = ({
  children,
  backgroundColor,
  borderColor,
  typeButton,
  onClick,
}) => (
  <ButtonStyle
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    typeButton={typeButton}
    onClick={onClick}
  >
    {children}
  </ButtonStyle>
)
