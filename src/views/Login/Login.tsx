import * as React from 'react';
import { SignIn } from './components/';
import { LoginContainer } from './Login.style';



export class Login extends React.Component {
    render(){
    return(
        <LoginContainer>
                <SignIn/>
        </LoginContainer>
    )}
}




