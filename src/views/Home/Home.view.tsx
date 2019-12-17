import * as React from 'react'
import { Canvas } from './Home.styles'
import { HeaderHome } from './components/Header'
import { BodyHome } from './components/BodyHome'

interface State {
  counterBackgroundId: number
}
export class Home extends React.Component<State> {
  state = {
    counterBackgroundId: 3,
  }

  private loadNextBackGround = () => {
    this.setState({
      counterBackgroundId:
        this.state.counterBackgroundId !== 9
          ? this.state.counterBackgroundId++
          : 1,
    })
  }

  render() {
    const imgUrl = require(`../../imgs/landscape_pic/${this.state
      .counterBackgroundId++}.jpg`)

    return (
      <>
        <Canvas backgroundId={imgUrl}>
          <HeaderHome />
          <BodyHome loadNextBackGround={this.loadNextBackGround} />
        </Canvas>
      </>
    )
  }
}
