import * as React from 'react'
import edit from '$icons/edit.svg'
import styled from 'styled-components'

const EditButtonStyle = styled.button`
  float: right;

  opacity: 0;

  height: ${p => p.theme.sizes.large};
  width: ${p => p.theme.sizes.large};

  position: absolute;

  right: 0;

  z-index: 5;

  color: blue;

  cursor: pointer;

  margin: 3px;
  padding: ${p => p.theme.sizes.xTiny};

  border: 1px solid #f0f0f0;
  border-radius: 50%;

  background-color: #f0f0f0;

  box-shadow: 0 ${p => p.theme.sizes.tiny} ${p => p.theme.sizes.small}
      rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  outline: none;
  :hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 769px) {
    opacity: 0.3;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
`

const EditImg = styled.img`
  background-color: transparent;
`

export const EditButton: React.SFC = () => (
  <EditButtonStyle>
    <EditImg src={edit} />
  </EditButtonStyle>
)
