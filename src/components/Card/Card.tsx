import * as React from 'react'
import { CardContainer, EditButton } from './Card.style';



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