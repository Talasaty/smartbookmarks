import * as React from 'react'
import { MainWrapper } from './MainHome.style';



export class MainHome extends React.Component {
    render(){
        return(
            <MainWrapper>
                {this.props.children}
            </MainWrapper>
        )
    }
        
    
}