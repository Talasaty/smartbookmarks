import styled from "styled-components";


export const CardContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 180px;
    height: 220px;

    margin: 0px;
    padding: 0px;

    background-color: white;

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const EditButton = styled.button`
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

    :hover{
        opacity: 0.6;
        
    }
`

export const EditImg = styled.img`
    background-color: transparent;
`