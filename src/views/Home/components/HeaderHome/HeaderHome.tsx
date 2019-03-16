import * as React from 'react'
import { HeaderContainer } from './HeaderHome.style'

export class HeaderHome extends React.Component {
  render() {
    return <HeaderContainer>{this.props.children}</HeaderContainer>
  }
}
