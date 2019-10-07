import { styled } from '$utils/theme/themeStyledComponents'

export const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const BodyHomeAside = styled.div`
  width: 20%;
  margin: ${p => p.theme.sizes.small} 0;
  min-width: 200px;
`

export const BodyHomeSection = styled.div`
  display: flex;

  flex-flow: row wrap;
  justify-content: space-around;
  width: 65%;
  margin: ${p => p.theme.sizes.small} 0;
  z-index: 5;
`
export const BodyHomeSettings = styled.div`
  display: flex;

  width: 15%;
  min-width: 150px;
  margin: ${p => p.theme.sizes.small} 0;
  background-color: blue;
  z-index: 0;
`
