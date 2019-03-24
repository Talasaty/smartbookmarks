import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 180px;
  height: 220px;

  margin: ${p => p.theme.sizes.tiny};
  padding: 0px;

  background-color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.sizes.tiny};

  box-shadow: 0 10px ${p => p.theme.sizes.small} rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 769px) {
    width: 100%;
    height: 220px;
    border-radius: 0;

  }

`
