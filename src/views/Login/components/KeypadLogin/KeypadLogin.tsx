import * as React from "react";
import { KeypadLoginStyle } from "./KeypadLoginStyle";


export class KeypadLogin extends React.Component {
    render(){
        return(
            <KeypadLoginStyle>
                {this.props.children}
            </KeypadLoginStyle>
        )
    }
}