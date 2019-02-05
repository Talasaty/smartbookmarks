import * as React from 'react'
import { ButtonStyle } from './Button.style';


export class Button extends React.Component {
    render(){
        return(
            <ButtonStyle>
                {this.props.children}
            </ButtonStyle>
        )
    }
}