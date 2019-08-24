import * as React from 'react'
import { styled } from '$utils/theme/themeStyledComponents'
import { colors, ColorsOptions } from '$utils/theme/colors'
import {
  fontSizes,
  fontWeight,
  FontSizeOptions,
  FontWeightOptions,
} from '$utils/theme/font'
import { SizesOptions, sizes } from '$utils/theme/sizes'

const TextContainer = styled.div<Props>`
  margin-top: ${p => sizes[p.marginTop]};
  margin-bottom: ${p => sizes[p.marginBottom]};
  margin-left: ${p => sizes[p.marginLeft]};
  margin-right: ${p => sizes[p.marginRight]};
  padding-top: ${p => sizes[p.paddingTop]};
  padding-bottom: ${p => sizes[p.paddingBottom]};
  padding-left: ${p => sizes[p.paddingLeft]};
  padding-right: ${p => sizes[p.paddingRight]};
`

const P = styled.p.attrs({})<Props>`
  font-size: ${p => (p.size ? fontSizes[p.size] : p.theme.fontSizes.h5)};
  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};
  font-weight: ${p =>
    p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
  font-family: 'Roboco';
`

const Span = styled.span.attrs({})<Props>`
  font-size: ${p => (p.size ? fontSizes[p.size] : p.theme.fontSizes.h4)};
  color: ${p => (p.color ? colors[p.color] : p.theme.colors.text)};
  font-weight: ${p =>
    p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
  font-family: 'Roboco';
`

interface Props {
  color?: ColorsOptions
  size?: FontSizeOptions
  weight?: FontWeightOptions
  typeText?: 'p' | 'span'
  children?: React.ReactNode
  paddingTop?: SizesOptions
  paddingBottom?: SizesOptions
  paddingLeft?: SizesOptions
  paddingRight?: SizesOptions
  marginTop?: SizesOptions
  marginBottom?: SizesOptions
  marginLeft?: SizesOptions
  marginRight?: SizesOptions
}

export const Text: React.SFC<Props> = ({
  color,
  size,
  weight,
  typeText,
  children,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  if (typeText === 'span') {
    return (
      <TextContainer
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        <Span color={color} size={size} weight={weight}>
          {children}
        </Span>
      </TextContainer>
    )
  }
  return (
    <TextContainer
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <P color={color} size={size} weight={weight}>
        {children}
      </P>
    </TextContainer>
  )
}
