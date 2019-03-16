import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin: 0 auto;

  width: 100%;

  min-height: 100vh;

  background-color: ${p => p.theme.colors.ligthGray};
`
