import * as React from 'react'
import { AsideWrapper } from './AsideHome.style';


export class AsideHome extends React.Component {
    render(){
        return(
            <AsideWrapper>
                {this.props.children}
            </AsideWrapper>
        )
    }
        
    
}
