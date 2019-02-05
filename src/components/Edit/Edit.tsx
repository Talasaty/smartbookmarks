import * as React from 'react'
import { EditButtonStyle, EditImg } from './Edit.style';
import edit from '$icons/edit.svg'

export class EditButton extends React.Component {
    render(
    ){
        return(
            <EditButtonStyle>
                <EditImg src={edit}/>
            </EditButtonStyle>
        )
    }
}