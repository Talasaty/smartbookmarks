import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Category } from './Category'
import { ThemeProvider } from '$utils/theme/ThemeProvider'

storiesOf('Category', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => (
    <Category name="name">Ejemplo de categoria normal</Category>
  ))
  .add('Main', () => (
    <Category isMain name="name">
      Ejemplo de categoria principal
    </Category>
  ))
  .add('Main blue', () => (
    <Category color="blue" isMain name="name">
      Ejemplo de categoria azul
    </Category>
  ))
