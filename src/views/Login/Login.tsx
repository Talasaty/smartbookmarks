import * as React from 'react';
import { SignIn, SignUp } from './components/';
import { LoginContainer } from './Login.style';


export class Login extends React.Component {
    render(){
        /* const buttonProperties = {
            border: false,
            colorBorder: '',
            backgroundColor: 'blue'
        } */
    return(
        <LoginContainer>
                <SignIn></SignIn>
                <SignUp></SignUp>
        </LoginContainer>
    )}
}