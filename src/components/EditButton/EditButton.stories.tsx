import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { EditButton } from './EditButton'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'

storiesOf('EditButton', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('round', () => (
    <div>
      <EditButton type="round" />
      pasa el ratón por la esquina superior izquierda
    </div>
  ))
  .add('dark', () => (
    <div>
      <EditButton color="dark" type="round" />
      pasa el ratón por la esquina superior izquierda
    </div>
  ))
