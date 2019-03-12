import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;

    margin: 0 auto;

    height: 60px;
    width: 100%;

    background-color: ${p => p.theme.colors.blue};
    box-shadow: 0 4px 2px -2px ${p => p.theme.colors.darkGray};
`