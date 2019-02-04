import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    

    position: relative;

    height: 50px;
    width: 400px;
    max-width: 400px;

    margin: 10px;

    background-color: transparent;

    opacity: 0.5;

    :hover{
        opacity: 1.0;
    }

    @media only screen and (max-width: 769px) {
        
        width: 100vw;
        max-width: 100vw;
        margin-left: 0px;
        margin-right: 0px;
    
    }

`

export const ArrowCategory = styled.img`
    float: right;
    right: 10px;

    margin: 0px 10px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    transform: scale(0.7);

    background-color: transparent;

    cursor: pointer;

`

export const NameCategory = styled.div`
    float: center;

    width: 100%;

    background-color: transparent;
    font-size: 1.2em;

    text-align: center;
`

export const OpenCategory = styled.img`
    float: left;
    left: 10px;

    margin: 0px 10px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    transform: scale(1.2);

    background-color: transparent;

    cursor: pointer;
`
