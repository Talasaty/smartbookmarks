import * as React from 'react'
import { CategoryContainer, ArrowCategory, NameCategory, OpenCategory } from './Category.style';
import arrowRigth from '$icons/arrowRigth.svg'
import launch from '$icons/launch.svg'

interface Props {
    Name: string
}

export class Category extends React.Component<Props> {
    render(
    ){
        const { Name } = this.props
        return(
            <CategoryContainer>
                <OpenCategory src={ launch }  onClick={()=> console.log('pulsado')}/>
                <NameCategory>
                    { Name.substr(0,30) }
                </NameCategory>
                <ArrowCategory src={ arrowRigth }/>
            </CategoryContainer>
        )
    }
}