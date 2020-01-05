import * as React from 'react'
import { Input } from '$components/Input'
import { Field } from 'formik'
import { SizesOptions } from '$utils/theme/sizes'
import { FontSizeOptions } from '$utils/theme/font'
import { ColorsOptions } from '$utils/theme/colors'

interface Props {
  iconLeft?: string
  iconRight?: string
  backgroundColor?: ColorsOptions
  borderColor?: ColorsOptions
  color?: ColorsOptions
  typeInput?: 'free' | 'restricted'
  border?: boolean
  paddingTop?: SizesOptions
  paddingBottom?: SizesOptions
  paddingLeft?: SizesOptions
  paddingRight?: SizesOptions
  fontSize?: FontSizeOptions
  placeHolderColor?: ColorsOptions
}

export const InputFiled: React.SFC<
  Props & React.HTMLProps<HTMLInputElement>
> = ({ ...props }) => <Field component={Input} {...props} />
