import * as React from 'react'
import { HeaderContainer } from './Header.style'


export class Header extends React.Component {
    render(){
        return(
            <HeaderContainer>
                {this.props.children}
            </HeaderContainer>
        )
    }
        
    
}
