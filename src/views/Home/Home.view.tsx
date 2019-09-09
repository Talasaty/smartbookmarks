import * as React from 'react'
import { Canvas } from './Home.styles'

interface State {
  counterBackgroundId: number
}
export class Home extends React.Component<State> {
  state = {
    counterBackgroundId: 1,
  }

  render() {
    const imgUrl = require(`../../imgs/landscape_pic/${this.state
      .counterBackgroundId++}.jpg`)

    console.log(this.state.counterBackgroundId)
    return (
      <>
        <Canvas backgroundId={imgUrl}>
          Home
          <button
            onClick={() => {
              this.setState({
                counterBackgroundId:
                  this.state.counterBackgroundId !== 9
                    ? this.state.counterBackgroundId++
                    : 1,
              })
            }}
          >
            next
          </button>
        </Canvas>
      </>
    )
  }
}
