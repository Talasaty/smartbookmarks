import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Category } from './Category'
import { ThemeProvider } from '$utils/theme/ThemeProvider'

storiesOf('Category', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => <Category name="name">Ejemplo de categoria</Category>)
