import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { EditButton } from './EditButton'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'
import { Card } from '$components/Card/Card'

storiesOf('EditButton', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('round', () => (
    <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png">
      <EditButton type="round" />
      pasa el ratón por la esquina superior izquierda
    </Card>
  ))
  .add('dark', () => (
    <Card img="http://www.vectorico.com/download/social_media/Reddit-Icon.png">
      <EditButton color="dark" type="round" />
      pasa el ratón por la esquina superior izquierda
    </Card>
  ))
