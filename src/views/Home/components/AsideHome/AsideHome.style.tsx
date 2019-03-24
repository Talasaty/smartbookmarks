import styled from 'styled-components'

export const AsideWrapper = styled.div`
  display: flex;
  max-width: 300px;
  width: 100%;

  margin-top: ${p => p.theme.sizes.huge};
  padding: ${p => p.theme.sizes.xTiny} ${p => p.theme.sizes.small};

  overflow-x: hidden;
  overflow-y: auto;

  float: left;
`
