import * as React from "react";
import { SignInContainer } from "./SignIn.style";


export class SignIn extends React.Component {
    render(){
        return(
            <SignInContainer>
                {this.props.children}
            </SignInContainer>
        )
    }
}