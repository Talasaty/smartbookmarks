import * as React from 'react';
import { LogInForm } from './components';
import { LoginContainer } from './Login.style';



export class Login extends React.Component {
    render(){
    return(
        <LoginContainer>
                <LogInForm/>
        </LoginContainer>
    )}
}




