import * as React from 'react'
import { ButtonStyle } from './Button.style';

interface Props{
    children?: React.ReactNode,
}

export const Button: React.SFC<Props> = ({children}) => (
    <ButtonStyle>
        {children}
    </ButtonStyle>
)
   
        

            
        
    
