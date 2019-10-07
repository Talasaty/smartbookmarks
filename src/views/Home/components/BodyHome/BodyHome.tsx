import * as React from 'react'
import {
  BodyHomeContainer,
  BodyHomeAside,
  BodyHomeSection,
  BodyHomeSettings,
} from './BodyHome.styles'
import { Category } from '$components/Category'
import { Card } from '$components/Card/Card'

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
        <BodyHomeSection>
          <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
          <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
          <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
          <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
          <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
          <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
          <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
          <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
          <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" />
          <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
          <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
          <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
          <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
        </BodyHomeSection>
        <BodyHomeSettings />
      </BodyHomeContainer>
    )
  }
}
