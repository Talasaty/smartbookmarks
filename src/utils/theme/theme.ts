import { FontSize, FontWeight, fontSizes, fontWeight } from './font'
import { Colors, colors } from './colors'
import { Sizes, sizes } from './sizes'

export interface ThemeInterface {
  colors: Colors
  fontSizes: FontSize
  fontWeight: FontWeight
  sizes: Sizes
}

export const theme: ThemeInterface = {
  colors,
  fontSizes,
  fontWeight,
  sizes,
}
