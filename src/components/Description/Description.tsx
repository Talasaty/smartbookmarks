import * as React from 'react'
import { DescriptionContainer } from './Description.style';


interface Props {
    DescriptionText: string;
}

export const Description: React.SFC<Props> = ({ DescriptionText }) => (
    <DescriptionContainer>
        { DescriptionText.substr(0,60) }
    </DescriptionContainer>
)
 

