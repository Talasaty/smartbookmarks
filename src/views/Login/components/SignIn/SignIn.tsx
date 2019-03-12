import * as React from "react";
import { SignInContainer, SignInHeader, SignInInputContainer, Text } from "./SignIn.style";
import { Button } from "$components/Button";
import { Input } from "$components/Input";


export class SignIn extends React.Component {
    render(){
        return(
            <SignInContainer>
                <SignInHeader/>
                <SignInInputContainer>
                    <Text>Usuario</Text>
                    <Input backgroundColor="white" borderColor="gray" color="text"/>
                </SignInInputContainer>
                <SignInInputContainer>
                    <Text>Contraseña</Text>
                    <Input backgroundColor="white" borderColor="gray" color="text"/>
                </SignInInputContainer>
                <Button/>
            </SignInContainer>
        )
    }
}