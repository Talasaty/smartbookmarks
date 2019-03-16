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

  height: 50px;
  width: 400px;
  max-width: 400px;

  margin: 10px;

  opacity: 0.6;

  :hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 769px) {
    width: 100vw;
    max-width: 100vw;
    margin-left: 0px;
    margin-right: 0px;
  }
`

export const ArrowCategory = styled.img.attrs({})<Props>`
  float: right;
  right: 10px;

  margin: 0px 10px;

  height: 20px;
  width: 20%;
  max-width: 20px;

  transform: scale(0.7);

  transform: ${p => (p.arrowDown ? 'rotate(90deg)' : 'rotate(0deg)')};

  cursor: pointer;
`

export const NameCategory = styled.div`
  float: center;

  width: 100%;

  font-size: 1.2em;

  text-align: center;

  cursor: pointer;
`

export const OpenCategory = styled.img`
  float: left;
  left: 10px;

  margin: 0px 10px;

  height: 20px;
  width: 20%;
  max-width: 20px;

  transform: scale(1.2);

  cursor: pointer;
`
