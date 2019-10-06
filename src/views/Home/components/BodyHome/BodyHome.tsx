import * as React from 'react'
import { BodyHomeContainer, BodyHomeAside } from './BodyHome.styles'
import { Category } from '$components/Category'

export class BodyHome extends React.Component {
  render() {
    return (
      <BodyHomeContainer>
        <BodyHomeAside>
          <Category isMain color="white" name="BookMarks" />

          <Category color="white" name="Categoria 1" />
          <Category color="white" name="Categoria 2" />
          <Category color="white" name="Categoria 3" />
          <Category color="white" name="Categoria 4" />
          <Category color="white" name="Categoria 5" />
          <Category color="white" name="Categoria 6" />
          <Category color="white" name="Categoria 7" />
        </BodyHomeAside>
      </BodyHomeContainer>
    )
  }
}
