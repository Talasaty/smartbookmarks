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


export class Input extends React.Component<Props> {
    
    render(
    ){
        const { iconLeft, iconRight, backgroundColor, textColor } = this.props.properties
        return(
            <InputContainer backgroundColor={backgroundColor}>
                { iconLeft && <LeftIcon backgroundColor={backgroundColor} src={iconLeft}/>}
                <InputStyled backgroundColor={backgroundColor} textColor={textColor}/>
                { iconRight && <RightIcon backgroundColor={backgroundColor} src={iconRight}/>}
            </InputContainer>
        )
    }
}