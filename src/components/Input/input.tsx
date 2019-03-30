import * as React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div.attrs({})<Props>`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  height: ${p => p.theme.sizes.large};
  width: 100%;
  max-width: ${p => (p.type === 'restricted' ? '450px' : '100%')};

  border-radius: ${p => p.theme.sizes.tiny};
  border: 1px solid
    ${p =>
      p.borderColor === 'white'
        ? p.theme.colors.white
        : p.borderColor === 'blue'
        ? p.theme.colors.blue2
        : p.theme.colors.ligthGray};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};

  @media only screen and (max-width: 769px) {
    margin-left: 0;
    margin-right: 0;
    max-width: ${p => (p.type === 'restricted' ? '300px' : '100%')};
  }
`
const InputStyled = styled.input.attrs({})<Props>`
  float: center;

  width: 100%;

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};

  text-align: right;

  margin: 0 ${p => p.theme.sizes.xTiny};

  font-size: 1.2em;
  color: ${p =>
    p.color === 'text'
      ? p.theme.colors.text
      : p.color === 'white'
      ? p.theme.colors.white
      : p.theme.colors.ligthGray};

  border: none;

  outline: none;
`

const RightIcon = styled.img.attrs({})<Props>`
  float: right;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};
`

const LeftIcon = styled.img.attrs({})<Props>`
  float: left;
  right: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};
`

interface Props {
  iconLeft?: string
  iconRight?: string
  backgroundColor?: 'blue' | 'white' | 'gray'
  borderColor?: 'blue' | 'white' | 'gray'
  color?: 'text' | 'white' | 'gray'
  type?: 'free' | 'restricted'
}

export const Input: React.SFC<Props> = ({
  iconLeft,
  iconRight,
  backgroundColor,
  borderColor,
  color,
  type,
}) => (
  <InputContainer
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    type={type}
  >
    {iconLeft && <LeftIcon src={iconLeft} backgroundColor={backgroundColor} />}
    <InputStyled backgroundColor={backgroundColor} color={color} />
    {iconRight && (
      <RightIcon src={iconRight} backgroundColor={backgroundColor} />
    )}
  </InputContainer>
)
