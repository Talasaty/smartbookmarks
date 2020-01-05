import { styled } from '$utils/theme/themeStyledComponents'
import Grid from '@material-ui/core/Grid'

interface Props {
  showCategories?: boolean
  showSessions?: boolean
}

export const GridElement = styled(Grid)`
  padding: 0;
`

export const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const BodyHomeAside = styled.div.attrs({})<Props>`
  width: 15%;
  margin: ${p => p.theme.sizes.small} 0;
  min-width: 200px;

  @media only screen and (max-width: 769px) {
    display: ${p => (p.showCategories ? 'block' : 'none')};
    width: ${p => (p.showCategories ? '100%' : '0%')};
  }
`

export const BodyHomeSection = styled.div<Props>`
  width: 70%;
  margin: ${p => p.theme.sizes.small} ${p => p.theme.sizes.tiny}
    ${p => p.theme.sizes.small} 0;
  z-index: 5;
  @media only screen and (max-width: 769px) {
    display: ${p => (p.showSessions || p.showCategories ? 'none' : 'block')};
    width: 100%;
    margin: ${p => p.theme.sizes.small};
  }
`
export const BodyHomeSessions = styled.div.attrs({})<Props>`
  width: 15%;
  margin: ${p => p.theme.sizes.small} 0;
  min-width: 200px;

  @media only screen and (max-width: 769px) {
    display: ${p => (p.showSessions ? 'block' : 'none')};
    width: ${p => (p.showSessions ? '100%' : '0%')};
  }
`
