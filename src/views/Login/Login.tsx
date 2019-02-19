import * as React from 'react';

import { Button } from '$components/Button';
import { HeaderLogin } from './components';
import { KeypadLogin } from './components/KeypadLogin';





export class Login extends React.Component {
    render(){
        const buttonProperties = {
            border: false,
            colorBorder: '',
            backgroundColor: 'blue'
        }
    return(
        <>
        <HeaderLogin>
            <KeypadLogin>
                <Button buttonProperties={buttonProperties}/>
                <Button buttonProperties={buttonProperties}/>
            </KeypadLogin>
        </HeaderLogin>
        <div>
            asdfasdfsdf
        </div>
        </>
    )}
}