import { styled } from '$utils/theme/themeStyledComponents'

export const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const BodyHomeAside = styled.div`
  width: 15%;
  margin: ${p => p.theme.sizes.small} 0;
  min-width: 200px;

  @media only screen and (max-width: 769px) {
    display: none;
  }
`

export const BodyHomeSection = styled.div`
  width: 70%;
  margin: ${p => p.theme.sizes.small} ${p => p.theme.sizes.tiny}
    ${p => p.theme.sizes.small} 0;
  z-index: 5;
  @media only screen and (max-width: 769px) {
    width: 100%;
    margin: ${p => p.theme.sizes.small};
  }
`
export const BodyHomeSessions = styled.div`
  width: 15%;
  margin: ${p => p.theme.sizes.small} 0;
  min-width: 200px;

  @media only screen and (max-width: 769px) {
    display: none;
  }
`
