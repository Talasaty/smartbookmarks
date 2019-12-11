import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Root from '$views/Root'
import { ThemeProvider } from '$utils/theme/ThemeProvider'

ReactDOM.render(
  <ThemeProvider>
    <Root />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
)
