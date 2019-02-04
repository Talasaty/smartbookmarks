import * as React from 'react'
import { DescriptionContainer } from './Description.style';


interface Props {
    DescriptionText: string;
}

export class Description extends React.Component<Props> {
    render(
    ){
        const { DescriptionText } = this.props;
        return(
            <DescriptionContainer>
                { DescriptionText.substr(0,60) }
            </DescriptionContainer>
        )
    }
}