import styled from 'styled-components'

export const AsideWrapper = styled.div`
  display: flex;
  flex-grow: 1;

  max-width: 300px;

  margin-top: 60px;
  padding: 35px 20px;

  overflow-x: hidden;
  overflow-y: auto;

  float: left;

  @media only screen and (max-width: 769px) {
    width: 100vw;
    max-width: 100vw;
  }
`
