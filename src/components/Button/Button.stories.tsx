import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { ThemeProvider } from '$utils/theme/ThemeProvider'

storiesOf('Button', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => (
    <Button
      typeButton="normal"
      backgroundColor="blue"
      borderColor="blue"
      onClick={() => alert('Botón normal')}
    >
      Button normal
    </Button>
  ))
  .add('tiny', () => (
    <Button
      typeButton="tiny"
      backgroundColor="blue2"
      borderColor="black"
      onClick={() => alert('Botón tiny')}
    >
      Button tiny
    </Button>
  ))
  .add('big', () => (
    <Button
      typeButton="big"
      backgroundColor="darkGray"
      borderColor="ligthGray"
      onClick={() => alert('Botón big')}
    >
      Button big
    </Button>
  ))
  .add('free', () => (
    <Button
      typeButton="free"
      backgroundColor="white"
      borderColor="text"
      onClick={() => alert('Botón free')}
    >
      Button free
    </Button>
  ))
