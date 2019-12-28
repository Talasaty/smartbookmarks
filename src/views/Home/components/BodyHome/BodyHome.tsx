import * as React from 'react'
import {
  BodyHomeContainer,
  BodyHomeAside,
  BodyHomeSection,
  BodyHomeSettings,
  NextBGContainer,
} from './BodyHome.styles'
import { Category } from '$components/Category'
import { Card } from '$components/Card/Card'
import Grid from '@material-ui/core/Grid'
import { Button } from '$components/Button'
import { Text } from '$components/Text'

interface Props {
  loadNextBackGround: () => void
}
export class BodyHome extends React.Component<Props> {
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
          <Grid container alignContent="center" spacing={2}>
            <Grid item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Card img="https://image.flaticon.com/icons/png/512/33/33949.png" />
            </Grid>
          </Grid>
        </BodyHomeSection>
        <BodyHomeSettings>
          <NextBGContainer>
            <Button
              typeButton="big"
              backgroundColor="transparent"
              borderColor="transparent"
              onClick={() => {
                this.props.loadNextBackGround()
              }}
            >
              <Text typeText="span" color="white" size="h4" center="center">
                Next BG >>
              </Text>
            </Button>
          </NextBGContainer>
          <Category isMain color="white" name="WorkSpace" />
          <Category color="white" name="Sesión de 1" />
          <Category color="white" name="Sesión 2" />
          <Category color="white" name="Sesión 3" />
          <Category color="white" name="Categoria 4" />
          <Category color="white" name="Sesión 5" />
          <Category color="white" name="Sesión 6" />
          <Category color="white" name="Sesión 7" />
        </BodyHomeSettings>
      </BodyHomeContainer>
    )
  }
}
