import * as React from 'react'
import { theme } from "./theme";
import { ThemeProvider as Root} from './themeStyledComponents' 

export const ThemeProvider = ({ children }) => {
    return <Root theme={theme}>{children}</Root>
}


