import styled from 'styled-components'

interface Props {
  backgroundColor?: string
  borderColor?: string
  color?: string
}

export const InputContainer = styled.div.attrs({})<Props>`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  height: ${p => p.theme.sizes.large};
  width: 100%;
  max-width: 450px;

  border-radius: ${p => p.theme.sizes.tiny};
  border: 1px solid
    ${p =>
      p.borderColor === 'white'
        ? p.theme.colors.white
        : p.borderColor === 'blue'
        ? p.theme.colors.blue2
        : p.theme.colors.ligthGray};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};

  @media only screen and (max-width: 769px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const InputStyled = styled.input.attrs({})<Props>`
  float: center;

  width: 100%;

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};

  text-align: right;

  margin: 0 ${p => p.theme.sizes.xTiny};

  font-size: 1.2em;
  color: ${p =>
    p.color === 'text'
      ? p.theme.colors.text
      : p.color === 'white'
      ? p.theme.colors.white
      : p.theme.colors.ligthGray};

  border: none;

  outline: none;
`

export const RightIcon = styled.img.attrs({})<Props>`
  float: right;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px 1${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};
`

export const LeftIcon = styled.img.attrs({})<Props>`
  float: left;
  right: ${p => p.theme.sizes.tiny};

  margin: 0px 1${p => p.theme.sizes.xTiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  background-color: ${p =>
    p.backgroundColor === 'white'
      ? p.theme.colors.white
      : p.backgroundColor === 'blue'
      ? p.theme.colors.blue2
      : p.theme.colors.lightGray};
`
