import { FontSize, FontWeight, fontSize, fontWeight } from './font';
import { Colors, colors } from './colors';
import { Sizes, sizes } from './sizes';

export interface ThemeInterface {
    colors: Colors
    fontSize: FontSize
    fontWeight: FontWeight
    sizes: Sizes
}

export const theme: ThemeInterface = {
    colors,
    fontSize,
    fontWeight,
    sizes
}