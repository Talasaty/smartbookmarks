import * as React from 'react';
import { SignIn } from './components/';
import { LoginContainer, HeaderLogin } from './Login.style';



export class Login extends React.Component {
    render(){
        /* const buttonProperties = {
            border: false,
            colorBorder: '',
            backgroundColor: 'blue'
        } */
    return(
        <LoginContainer>
                <SignIn>
                <HeaderLogin/>
                </SignIn>
        </LoginContainer>
    )}
}




