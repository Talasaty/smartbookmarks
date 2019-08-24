export interface Sizes {
  xTiny: string
  tiny: string
  mini: string
  small: string
  base: string
  large: string
  huge: string
}

export const sizes: Sizes = {
  xTiny: '5px',
  tiny: '10px',
  mini: '15px',
  small: '20px',
  base: '25px',
  large: '40px',
  huge: '60px',
}

export type SizesOptions =
  | 'xTiny'
  | 'tiny'
  | 'mini'
  | 'small'
  | 'base'
  | 'large'
  | 'huge'
