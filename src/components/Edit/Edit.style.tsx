import styled from "styled-components";

export const EditButtonStyle = styled.button`
    position: absolute;

    opacity: 0;

    height: 35px;
    width: 35px;

    right: 0;
    top: 0;

    z-index: 999;

    color: blue;

    cursor: pointer;

    margin: 3px;
    padding: 5px;

    border: 1px solid #F0F0F0;
    border-radius: 50%;

    background-color: #F0F0F0;

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    outline: none;
    :hover{
        opacity: 0.8;
        
    }
`

export const EditImg = styled.img`
    background-color: transparent;
`