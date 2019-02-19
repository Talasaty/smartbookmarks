import * as React from 'react'
import { InputContainer, LeftIcon, InputStyled, RightIcon } from './input.style';

interface Props {
    properties: {
        iconLeft?: string
        iconRight?: string
        backgroundColor?: string
        textColor?: string
    }
    
}


export const Input: React.SFC<Props> = ({ properties }) => (
    <InputContainer backgroundColor={properties.backgroundColor}>
        { properties.iconLeft && <LeftIcon backgroundColor={properties.backgroundColor} src={properties.iconLeft}/>}
        <InputStyled backgroundColor={properties.backgroundColor} textColor={properties.textColor}/>
        { properties.iconRight && <RightIcon backgroundColor={properties.backgroundColor} src={properties.iconRight}/>}
    </InputContainer>
)
    
