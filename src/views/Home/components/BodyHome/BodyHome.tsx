import * as React from 'react'
import {
  BodyHomeContainer,
  BodyHomeAside,
  BodyHomeSection,
  BodyHomeSessions,
  GridElement,
} from './BodyHome.styles'
import { Category } from '$components/Category'
import { Card } from '$components/Card/Card'
import { Grid } from '@material-ui/core'

interface Props {
  showCategories: boolean
  showSessions: boolean
  handleCategories: () => void
  handleSessions: () => void
}

export class BodyHome extends React.Component<Props> {
  render() {
    const { showCategories, showSessions } = this.props
    return (
      <BodyHomeContainer>
        <BodyHomeAside showCategories={showCategories}>
          <Category isMain color="white" name="BookMarks" />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 1"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 2"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 3"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 4"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 5"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 6"
          />
          <Category
            onClick={() => this.props.handleCategories()}
            color="white"
            name="Categoria 7"
          />
        </BodyHomeAside>
        <BodyHomeSection
          showCategories={showCategories}
          showSessions={showSessions}
        >
          <Grid
            container
            alignContent="center"
            spacing={1}
            style={{ width: '100%' }}
          >
            <GridElement item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </GridElement>
            <GridElement item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </GridElement>
          </Grid>
        </BodyHomeSection>
        <BodyHomeSessions showSessions={showSessions}>
          <Category isMain color="white" name="WorkSpace" />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión de 1"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión 2"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión 3"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Categoria 4"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión 5"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión 6"
          />
          <Category
            onClick={() => this.props.handleSessions()}
            color="white"
            name="Sesión 7"
          />
        </BodyHomeSessions>
      </BodyHomeContainer>
    )
  }
}
