import styled from "styled-components";


export const CardContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 180px;
    height: 220px;

    margin: 10px;
    padding: 10px;

    background-color: green;
`

export const EditButton = styled.button`
    position: absolute;

    opacity: 0;

    height: 40px;
    width: 40px;

    right: 0;
    top: 0;

    z-index: 999;

    background-color: yellow;

    :hover{
        opacity: 1;
    }
`