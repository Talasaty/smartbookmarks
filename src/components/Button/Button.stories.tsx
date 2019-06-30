import * as React from 'react'
import { Button } from './Button'
import { storiesOf } from '@storybook/react'

storiesOf('Button', module).add('default', () => (
  <Button onClick={() => alert('Hello')}>Hello Button</Button>
))