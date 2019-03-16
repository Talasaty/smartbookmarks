export interface FontSize {
  h6: string
  h5: string
  h4: string
  h3: string
  h2: string
  h1: string
}

export interface FontWeight {
  light: string
  tiny: string
  small: string
  semiBold: string
  medium: string
  regular: string
  bold: string
}

export const fontSize: FontSize = {
  h6: '11px',
  h5: '14px',
  h4: '17px',
  h3: '${p => p.theme.sizes.small}',
  h2: '23px',
  h1: '26px',
}

export const fontWeight: FontWeight = {
  tiny: '100',
  small: '200',
  light: '300',
  semiBold: '600',
  medium: '500',
  regular: '400',
  bold: '700',
}
