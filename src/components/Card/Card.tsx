import * as React from 'react'
import { CardContainer, EditButton, EditImg } from './Card.style';
import edit from '$icons/edit.svg'


export class Card extends React.Component {
    render(){
        return(
            <CardContainer>
                <EditButton>
                    <EditImg src={edit}/>
                </EditButton>
                {this.props.children}
            </CardContainer>
        )
    }
        
    
}