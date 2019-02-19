import * as React from 'react'
import { SectionWrapper } from './SectionHome.style';



export class SectionHome extends React.Component {
    render(){
        return(
            <SectionWrapper>
                {this.props.children}
            </SectionWrapper>
        )
    }
        
    
}