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
`

export const BodyHomeSection = styled.div`
  width: 70%;
  margin: ${p => p.theme.sizes.small} ${p => p.theme.sizes.tiny}
    ${p => p.theme.sizes.small} 0;
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
