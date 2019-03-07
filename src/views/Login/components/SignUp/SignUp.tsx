import * as React from "react";
import { SignUpContainer } from "./SignUp.style";



export class SignUp extends React.Component {
    render(){
        return(
            <SignUpContainer>
                {this.props.children}
            </SignUpContainer>
        )
    }
}