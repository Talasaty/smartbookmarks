import styled from 'styled-components'

interface Props {
  arrowDown: boolean
}

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  position: relative;

  height: ${p => p.theme.sizes.huge};
  width: 400px;
  max-width: 400px;

  margin: ${p => p.theme.sizes.tiny};

  opacity: 0.6;

  :hover {
    opacity: 0.8;
  }

  svg {
    vertical-align: middle;
  }

  @media only screen and (max-width: 769px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const ArrowCategory = styled.img.attrs({})<Props>`
  max-width: ${p => p.theme.sizes.tiny};

  transform: ${p => (p.arrowDown ? 'rotate(90deg)' : 'rotate(0deg)')};

  cursor: pointer;
`

export const NameCategory = styled.div`
  width: 100%;

  margin-left: ${p => p.theme.sizes.tiny};

  cursor: pointer;
`

export const OpenCategory = styled.img`
  float: left;
  left: ${p => p.theme.sizes.tiny};

  margin: 0px ${p => p.theme.sizes.tiny};

  height: ${p => p.theme.sizes.small};
  width: 20%;
  max-width: ${p => p.theme.sizes.small};

  transform: scale(1.2);

  cursor: pointer;
`
