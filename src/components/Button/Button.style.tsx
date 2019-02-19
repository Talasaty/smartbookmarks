import styled from "styled-components";

interface Props{
    properties: {
        border: boolean,
        colorBorder: string,
        backgroundColor: string
    }
}

export const ButtonStyle = styled.button.attrs({})<Props>`

    width: 100px;
    min-height: 50px;
    max-height: 90%;

    margin: 10px;
    padding: 5px;

    border: ${p => p.properties.border ? `1px solid ${p.properties.colorBorder}`  : 'none'};

    background-color: ${p => p.properties.backgroundColor};


`
