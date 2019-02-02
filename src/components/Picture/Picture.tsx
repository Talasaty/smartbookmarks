import * as React from 'react'
import { PictureContainer } from './Picture.style';

export class Picture extends React.Component {
    render(){
        return(
            <PictureContainer>
                {this.props.children}
            </PictureContainer>
        )
    }
        
    
}