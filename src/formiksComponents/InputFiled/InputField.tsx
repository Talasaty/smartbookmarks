import * as React from 'react'
import { Input } from '$components/Input'
import { Field } from 'formik'

interface Props {
  iconLeft?: string
  iconRight?: string
  backgroundColor?: 'blue' | 'white' | 'gray'
  borderColor?: 'blue' | 'white' | 'gray'
  color?: 'text' | 'white' | 'gray'
  typeInput?: 'free' | 'restricted'
}

export const InputFiled: React.SFC<
  Props & React.HTMLProps<HTMLInputElement>
> = ({ ...props }) => <Field component={Input} {...props} />
