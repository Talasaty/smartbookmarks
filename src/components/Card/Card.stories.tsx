import * as React from 'react'
import { storiesOf } from '@storybook/react'
// import { Card } from './Card'
import { ThemeProvider } from '$utils/theme/ThemeProvider'

storiesOf('Card', module).addDecorator(story => (
  <ThemeProvider>{story()}</ThemeProvider>
))
// .add('normal', () => <Card>Ejemplo de Card</Card>)
