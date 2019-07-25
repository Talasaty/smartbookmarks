import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'
import { Input } from '.'
import iconDummie from './iconDummie.svg'

storiesOf('Input', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('free', () => <Input typeInput="free" />)
  .add('restricted', () => <Input typeInput="restricted" />)
  .add('with icon lef', () => (
    <Input typeInput="restricted" iconLeft={iconDummie} />
  ))
  .add('with icon rigth', () => (
    <Input typeInput="restricted" iconRight={iconDummie} />
  ))
