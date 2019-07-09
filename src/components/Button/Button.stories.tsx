import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button';
import { ThemeProvider } from '$utils/theme/ThemeProvider';

storiesOf('Button', module)
.addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>)
.add('default', () => (
  <Button onClick={() => alert('Hello')}>Hello Button</Button>
))
