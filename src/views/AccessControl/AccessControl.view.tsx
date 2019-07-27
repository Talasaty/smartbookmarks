import * as React from 'react'
import { Canvas } from './components/Canvas'
import { Text } from '$components/Text'
import { LoginContainer } from './components/LoginContainer'

export class AccessControl extends React.Component {
  render() {
    return (
      <Canvas>
        <LoginContainer>
          <Text color="white" size="h4">
            nuevo Login
          </Text>
        </LoginContainer>
      </Canvas>
    )
  }
}
