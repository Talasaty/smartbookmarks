import * as React from 'react'
import { InputContainer, LeftIcon, InputStyled, RightIcon } from './input.style'

interface Props {
  iconLeft?: string
  iconRight?: string
  backgroundColor?: 'blue' | 'white' | 'gray'
  borderColor?: 'blue' | 'white' | 'gray'
  color?: 'text' | 'white' | 'gray'
}

export const Input: React.SFC<Props> = ({
  iconLeft,
  iconRight,
  backgroundColor,
  borderColor,
  color,
}) => (
  <InputContainer backgroundColor={backgroundColor} borderColor={borderColor}>
    {iconLeft && <LeftIcon src={iconLeft} backgroundColor={backgroundColor} />}
    <InputStyled backgroundColor={backgroundColor} color={color} />
    {iconRight && (
      <RightIcon src={iconRight} backgroundColor={backgroundColor} />
    )}
  </InputContainer>
)
