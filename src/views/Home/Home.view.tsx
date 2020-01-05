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
    showCategories: false,
    showSessions: false,
  }

  private handleCategories = () =>
    this.setState({
      showCategories: !this.state.showCategories,
      showSessions: false,
    })

  private handleSessions = () =>
    this.setState({
      showCategories: false,
      showSessions: !this.state.showSessions,
    })

  render() {
    const { showCategories, showSessions } = this.state
    return (
      <>
        <Canvas>
          <HeaderHome
            handleCategories={this.handleCategories}
            handleSessions={this.handleSessions}
          />
          <BodyHome
            showCategories={showCategories}
            showSessions={showSessions}
            handleCategories={this.handleCategories}
            handleSessions={this.handleSessions}
          />
        </Canvas>
      </>
    )
  }
}
