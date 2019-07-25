import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'
import { Text } from '.'

storiesOf('Text', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => <Text>Texto de prueba</Text>)
  .add('text h1', () => <Text size="h1">Texto h1</Text>)
  .add('text h2', () => <Text size="h2">Texto h2</Text>)
  .add('text h3', () => <Text size="h3">Texto h3</Text>)
  .add('text h4', () => <Text size="h4">Texto h4</Text>)
  .add('text h5', () => <Text size="h5">Texto h5</Text>)
  .add('text h6', () => <Text size="h6">Texto h6</Text>)
  .add('text h1 span', () => (
    <Text typeText="span" size="h1">
      Texto h1 span
    </Text>
  ))
  .add('text h1 p', () => (
    <Text typeText="p" size="h1">
      Texto h1 p
    </Text>
  ))
