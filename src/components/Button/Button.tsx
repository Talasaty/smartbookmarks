import * as React from 'react'
import { ButtonStyle } from './Button.style';

interface Props{
    children?: React.ReactNode,
    buttonProperties: {
        border: boolean,
        colorBorder: string,
        backgroundColor: string
    }
}

export const Button: React.SFC<Props> = ({children, buttonProperties}) => (
    <ButtonStyle properties={buttonProperties}>
        {children}
    </ButtonStyle>
)
   
        

            
        
    
