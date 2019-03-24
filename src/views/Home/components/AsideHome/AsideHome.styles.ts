import styled from 'styled-components'

interface Prop {
  show: boolean
}
export const AsideWrapper = styled.div.attrs({})<Prop>`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  width: 100%;

  margin-top: ${p => p.theme.sizes.huge};
  padding: ${p => p.theme.sizes.xTiny} ${p => p.theme.sizes.small};

  overflow-x: hidden;
  overflow-y: auto;

  float: left;

  @media only screen and (max-width: 769px){
    position: absolute;
    display: ${p => p.show ? 'block' : 'none'};
    z-index: 99;
    max-width: 100%;
    padding: 0;
    background-color: ${p => p.theme.colors.white};
    height: 100vh;
    animation-name: opening;
    animation-duration: 1s;

    @keyframes opening {
      0% {
        height: 0vh;
      }
      100% {
        height: 100vh;
      }
    }
  }

  
`
