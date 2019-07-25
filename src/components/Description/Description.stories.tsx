import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Description } from './Description'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'

storiesOf('Description', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => (
    <Description descriptionText="name">Ejemplo de descripcion</Description>
  ))
