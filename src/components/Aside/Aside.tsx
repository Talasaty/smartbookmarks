import * as React from 'react'
import { AsideWrapper } from './Aside.style';


export class Aside extends React.Component {
    render(){
        return(
            <AsideWrapper>
                {this.props.children}
            </AsideWrapper>
        )
    }
        
    
}
