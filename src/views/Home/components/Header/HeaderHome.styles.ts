import { styled } from '$utils/theme/themeStyledComponents'

export const HeaderHomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: ${p => p.theme.sizes.xTiny};
  margin-bottom: ${p => p.theme.sizes.small};
`

export const SearchHomeContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-bottom: solid 1px ${p => p.theme.colors.white};
  @media only screen and (max-width: 769px) {
    width: 80%;
    margin-top: ${p => p.theme.sizes.tiny};
  }
`

export const ButtonSearchHome = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding-right: ${p => p.theme.sizes.small};
`

export const ButtonSettingsHome = styled(ButtonSearchHome)`
  padding-right: 0;
`

export const IconSearchHome = styled.img`
  height: ${p => p.theme.sizes.small};
`
export const SettingsHomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

export const IconSettingsHome = styled.img`
  height: ${p => p.theme.sizes.small};
  margin: 0 ${p => p.theme.sizes.tiny};
`
