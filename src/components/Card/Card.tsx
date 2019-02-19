import * as React from 'react'
import { CardContainer } from './Card.style';
import { EditButton } from '$components/Edit/Edit';

interface Props {
    children?: React.ReactNode
}
export const Card: React.SFC<Props> = ({ children }) => (
    <CardContainer>
        <EditButton/>
            {children}
    </CardContainer>
)
   
            
         
    
