import * as React from 'react'
import { BodyHomeContainer, BodyHomeAside } from './BodyHome.styles'
import { Category } from '$components/Category'

export class BodyHome extends React.Component {
  render() {
    return (
      <BodyHomeContainer>
        <BodyHomeAside>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
          <Category color="white" name="name">
            Ejemplo de categoria
          </Category>
        </BodyHomeAside>
      </BodyHomeContainer>
    )
  }
}
