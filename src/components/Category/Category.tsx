import * as React from 'react'
import { CategoryContainer, ArrowCategory, NameCategory, IconCategory } from './Category.style';


interface Props {
    Name: string
}

export class Category extends React.Component<Props> {
    render(
    ){
        const { Name } = this.props
        return(
            <CategoryContainer>
                <IconCategory/>
                <NameCategory>
                    { Name.substr(0,30) }
                </NameCategory>
                <ArrowCategory/>
            </CategoryContainer>
        )
    }
}