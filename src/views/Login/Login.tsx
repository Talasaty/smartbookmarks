import * as React from 'react';
import { Main } from '$components/Main/Main';
import { Button } from '$components/Button';
import { HeaderLogin } from './components';




export class Login extends React.Component {
    render(){
    return(
        <>
        <HeaderLogin>
            <Button/>
        </HeaderLogin>
        <Main>
            Infografias de inicio
        </Main>
        </>
    )}
}