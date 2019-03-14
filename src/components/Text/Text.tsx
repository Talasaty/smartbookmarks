import * as React from 'react'
import styled from 'styled-components'
import { colors } from '$utils/theme/colors'
import { fontSize, fontWeight } from '$utils/theme/font'

const P = styled.p.attrs({})<Props>`
    font-size: ${p => p.size ? fontSize[p.size] : p.theme.fontSize.h4};
    color: ${p => p.color ? colors[p.color] : p.theme.colors.text};
    font-weight: ${p => p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
`

const Span = styled.span.attrs({})<Props>`
    font-size: ${p => p.size ? fontSize[p.size] : p.theme.fontSize.h4};
    color: ${p => p.color ? colors[p.color] : p.theme.colors.text};
    font-weight: ${p => p.weight ? fontWeight[p.weight] : p.theme.fontWeight.light};
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
`

interface Props {
    color?: 'ligthGray' | 'darkGray' |'white' | 'black' | 'text' | 'blue' | 'blue2' | 'lighthBlue' | 'darkBlue'
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    weight?: 'light' | 'semiBold' | 'medium' | 'regular' | 'bold'
    type?: 'p' | 'span'
    children: React.ReactNode
}


export const Text: React.SFC<Props> = ({color, size, weight, type, children}) => {
    if( type === 'span' ){
        return(<Span color={color} size={size} weight={weight}>{children}</Span>)
    }
    return(<P color={color} size={size} weight={weight}>{children}</P>)
}

