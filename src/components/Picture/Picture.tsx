import * as React from 'react'
import { PictureContainer } from './Picture.style';

interface Props {
    img: string;
}
export class Picture extends React.Component<Props> {
    render(){
        const { img } = this.props
        return(
            <PictureContainer src={img}/>
        )
    }
        
    
}