import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Root from '$views/Root';
import { ThemeProvider } from 'styled-components';
import { colors } from '$utils/theme/colors';

const theme = {colors}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
  
);

