import styled from "styled-components";

export const ButtonStyle = styled.button.attrs({})`

    width: 100px;
    min-height: 50px;
    max-height: 90%;

    margin: 10px;
    padding: 5px;

    background-color: ${p => p.theme.colors.blue};

    border-radius: 10px;

    outline: 0;

    :hover{
        cursor: pointer;
    }


`
