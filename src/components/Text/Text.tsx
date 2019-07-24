import * as React from 'react'
import { styled } from '$utils/theme/themeStyledComponents'
import { colors, ColorsOptions } from '$utils/theme/colors'
import {
  fontSize,
  fontWeight,
  FontSizeOptions,
  FontWeightOptions,
} from '$utils/theme/font'

const P = styled.p.attrs({})<Props>`
  font-size: ${p => (p.size ? fontSize[p.size] : p.theme.fontSize.h5)};
  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};
  font-weight: ${p =>
    p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
  font-family: ${p =>
    p.weight === 'semiBold' || p.weight === 'bold' || p.weight === 'medium'
      ? 'Roboco'
      : 'Open Sans'};
  letter-spacing: ${p =>
    p.weight === 'semiBold' || p.weight === 'bold' || p.weight === 'medium'
      ? '1px'
      : '0.${p => p.theme.sizes.xTiny}'};
`

const Span = styled.span.attrs({})<Props>`
  font-size: ${p => (p.size ? fontSize[p.size] : p.theme.fontSize.h4)};
  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};
  font-weight: ${p =>
    p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
  font-family: ${p =>
    p.weight === 'semiBold' || p.weight === 'bold' || p.weight === 'medium'
      ? 'Roboco'
      : 'Open Sans'};
  letter-spacing: 1px;
`

interface Props {
  color?: ColorsOptions
  size?: FontSizeOptions
  weight?: FontWeightOptions
  type?: 'p' | 'span'
  children?: React.ReactNode
}

export const Text: React.SFC<Props> = ({
  color,
  size,
  weight,
  type,
  children,
}) => {
  if (type === 'span') {
    return (
      <Span color={color} size={size} weight={weight}>
        {children}
      </Span>
    )
  }
  return (
    <P color={color} size={size} weight={weight}>
      {children}
    </P>
  )
}
