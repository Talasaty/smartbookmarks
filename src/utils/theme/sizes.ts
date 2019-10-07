export interface Sizes {
  null: string
  xTiny: string
  tiny: string
  mini: string
  small: string
  base: string
  large: string
  huge: string
}

export const sizes: Sizes = {
  null: '0px',
  xTiny: '5px',
  tiny: '10px',
  mini: '15px',
  small: '20px',
  base: '25px',
  large: '40px',
  huge: '60px',
}

export type SizesOptions =
  | 'null'
  | 'xTiny'
  | 'tiny'
  | 'mini'
  | 'small'
  | 'base'
  | 'large'
  | 'huge'
