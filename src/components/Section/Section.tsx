import * as React from 'react'
import { SectionWrapper } from './Section.style';



export class Section extends React.Component {
    render(){
        return(
            <SectionWrapper>
                {this.props.children}
            </SectionWrapper>
        )
    }
        
    
}