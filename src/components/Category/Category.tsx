import * as React from 'react'
import { CategoryContainer, ArrowCategory, NameCategory, OpenCategory } from './Category.style';
import arrowRigth from '$icons/arrowRigth.svg'
import launch from '$icons/launch.svg'
import { EditButton } from '$components/Edit';

interface Props {
    Name: string
}

export class Category extends React.Component<Props> {

    state = {
        categoryWasClicked: false,
    }

    changeOrientationArrow = () => {
        this.setState({ categoryWasClicked: !this.state.categoryWasClicked})
    }

    render(
    ){
        const { Name } = this.props
        const { categoryWasClicked } = this.state 
        return(
            <CategoryContainer>
                <OpenCategory src={ launch }  onClick={()=> console.log('pulsado')}/>
                <ArrowCategory src={ arrowRigth } arrowDown={categoryWasClicked} onClick={() => this.changeOrientationArrow()}/>
                <NameCategory onClick={() => this.changeOrientationArrow()}>
                    { Name.substr(0,22) }
                </NameCategory>
                <EditButton/>
            </CategoryContainer>
        )
    }
}