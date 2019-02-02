import * as React from 'react'
import { MainWrapper } from './Main.style';



export class Main extends React.Component {
    render(){
        return(
            <MainWrapper>
                {this.props.children}
            </MainWrapper>
        )
    }
        
    
}