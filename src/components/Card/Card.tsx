import * as React from 'react'
import { CardContainer } from './Card.style';
import { EditButton } from '$components/Edit/Edit';


export class Card extends React.Component {
    render(){
        return(
            <CardContainer>
                <EditButton/>
                {this.props.children}
            </CardContainer>
        )
    }
        
    
}