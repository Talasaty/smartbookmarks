import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'
import { Input } from '.'
import search from '$icons/search.svg'

storiesOf('Input', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('free', () => <Input type="free" />)
  .add('restricted', () => <Input type="restricted" />)
  .add('with icon lef', () => <Input type="restricted" iconLeft={search} />)
  .add('with icon rigth', () => <Input type="restricted" iconRight={search} />)
