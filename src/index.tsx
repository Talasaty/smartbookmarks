import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Root from '$views/Root';
import { ThemeProvider } from 'styled-components';
import { colors } from '$utils/theme/colors';
import { sizes } from '$utils/theme/sizes';
import { fontSize, fontWeight } from '$utils/theme/font'


const theme = {colors, sizes, fontWeight, fontSize}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
  
);

