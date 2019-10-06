import * as React from 'react'
import { styled } from '$utils/theme/themeStyledComponents'
import { SizesOptions, sizes } from '$utils/theme/sizes'
import { FontSizeOptions, fontSizes } from '$utils/theme/font'
import { ColorsOptions, colors } from '$utils/theme/colors'

const InputContainer = styled.div.attrs({})<Props>`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  width: 100%;
  max-width: ${p => (p.typeInput === 'restricted' ? '450px' : '100%')};

  margin: 5px 0;

  border-radius: ${p => p.border && p.theme.sizes.tiny};
  border: ${p =>
    p.border &&
    `1px solid ${p.color ? colors[p.color] : p.theme.colors.ligthGray}`};

  background-color: ${p =>
    p.backgroundColor ? colors[p.backgroundColor] : p.theme.colors.ligthGray};

  @media only screen and (max-width: 769px) {
    margin-left: 0;
    margin-right: 0;
    max-width: ${p => (p.typeInput === 'restricted' ? '300px' : '100%')};
  }
`
const InputStyled = styled.input.attrs({})<Props>`
  width: 100%;

  background-color: ${p =>
    p.backgroundColor ? colors[p.backgroundColor] : p.theme.colors.ligthGray};

  font-family: 'Roboco';

  margin: 0 ${p => p.theme.sizes.xTiny};

  padding-top: ${p => p.paddingTop && sizes[p.paddingTop]};
  padding-bottom: ${p => p.paddingBottom && sizes[p.paddingBottom]};
  padding-left: ${p => p.paddingLeft && sizes[p.paddingLeft]};
  padding-right: ${p => p.paddingRight && sizes[p.paddingRight]};

  font-size: ${p =>
    p.fontSize ? fontSizes[p.fontSize] : p.theme.fontSizes.h3};

  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};

  border: none;

  outline: none;

  ::placeholder {
    color: ${p => p.theme.colors.ligthGray};
  }
`

const RightIcon = styled.img.attrs({})<Props>`
  float: right;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.backgroundColor ? colors[p.backgroundColor] : p.theme.colors.ligthGray};
`

const LeftIcon = styled.img.attrs({})<Props>`
  float: left;
  right: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.color ? colors[p.color] : p.theme.colors.ligthGray};
`

interface Props {
  iconLeft?: string
  iconRight?: string
  backgroundColor?: ColorsOptions
  borderColor?: ColorsOptions
  border?: boolean
  color?: ColorsOptions
  typeInput?: 'free' | 'restricted'
  paddingTop?: SizesOptions
  paddingBottom?: SizesOptions
  paddingLeft?: SizesOptions
  paddingRight?: SizesOptions
  fontSize?: FontSizeOptions
}

export const Input: React.SFC<Props> = ({
  iconLeft,
  iconRight,
  backgroundColor,
  borderColor,
  color,
  border,
  typeInput,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  fontSize,
  ...props
}) => (
  <InputContainer
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    border={border}
    typeInput={typeInput}
  >
    {iconLeft && <LeftIcon src={iconLeft} backgroundColor={backgroundColor} />}
    <InputStyled
      backgroundColor={backgroundColor}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      fontSize={fontSize}
      color={color ? color : 'text'}
      {...props}
    />
    {iconRight && (
      <RightIcon src={iconRight} backgroundColor={backgroundColor} />
    )}
  </InputContainer>
)
