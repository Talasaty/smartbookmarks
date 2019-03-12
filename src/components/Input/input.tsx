import * as React from 'react'
import { InputContainer, LeftIcon, InputStyled, RightIcon } from './input.style';

interface Props {
    iconLeft?: string
    iconRight?: string
}


export const Input: React.SFC<Props> = ({iconLeft, iconRight}) => (
    <InputContainer>
        { iconLeft && <LeftIcon src={iconLeft}/>}
        <InputStyled/>
        { iconRight && <RightIcon src={iconRight}/>}
    </InputContainer>
)
    
