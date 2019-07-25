import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from '../../utils/theme/ThemeProvider'
import { Preview } from '.'
import test01 from '$imgs/test01.jpg'

storiesOf('Preview', module)
  .addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
  .add('normal', () => <Preview img={test01} />)
