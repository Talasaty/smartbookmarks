import * as React from 'react';
import { Main } from '$components/Main/Main';
import { Button } from '$components/Button';
import { HeaderLogin } from './components';
import { KeypadLogin } from './components/KeypadLogin';




export class Login extends React.Component {
    render(){
    return(
        <>
        <HeaderLogin>
            <KeypadLogin>
                <Button/>
                <Button/>
            </KeypadLogin>
        </HeaderLogin>
        <Main>
            Infografias de inicio
        </Main>
        </>
    )}
}