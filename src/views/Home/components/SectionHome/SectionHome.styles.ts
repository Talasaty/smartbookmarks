import styled from 'styled-components'

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  width: 100%;

  padding: ${p => p.theme.sizes.small};
  margin-top: 80px;
  margin-right: ${p => p.theme.sizes.small};
  margin-left: ${p => p.theme.sizes.small};
  margin-bottom: ${p => p.theme.sizes.small};

  background-color: ${p => p.theme.colors.white};

  overflow-x: hidden;
  overflow-y: auto;

  float: right;

  border-radius: ${p => p.theme.sizes.tiny};

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 769px) {
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-top: 60px;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
  }
`
