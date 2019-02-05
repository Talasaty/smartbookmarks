import * as React from "react";
import { HeaderLoginStyle } from "./HeaderLoginStyle";



export class HeaderLogin extends React.Component {
    render(){
        return(
            <HeaderLoginStyle>
                {this.props.children}
            </HeaderLoginStyle>
        )
    }
}