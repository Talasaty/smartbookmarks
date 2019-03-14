import * as React from "react"
import { SignInContainer, 
        SignInHeader, 
        SignInInputContainer, 
        LabelContainer, 
        ButtonLoginContainer, 
        } from "./SignIn.style"

import { Input } from "$components/Input"
import { Text } from "$components/Text"
import { Button } from "$components/Button"


export class SignIn extends React.Component {
    render(){
        return(
            <SignInContainer>
                <SignInHeader/>
                <SignInInputContainer>
                    <LabelContainer>
                        <Text weight="light" type="span">Usuario</Text>
                    </LabelContainer>
                    <Input backgroundColor="white" borderColor="gray" color="text"/>
                </SignInInputContainer>
                <SignInInputContainer>
                    <LabelContainer>
                        <Text weight="light" type="span">Contraseña</Text>
                    </LabelContainer>
                    <Input backgroundColor="white" borderColor="gray" color="text"/>
                </SignInInputContainer>
                <ButtonLoginContainer>
                    <Button>
                        <Text weight="light" type="span" color="ligthGray">Login</Text>
                    </Button>
                </ButtonLoginContainer>
            </SignInContainer>
        )
    }
}