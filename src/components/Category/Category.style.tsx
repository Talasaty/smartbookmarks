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

    background-color: pink;

    @media only screen and (max-width: 769px) {
        
        width: 100vw;
        max-width: 100vw;
        margin-left: 0px;
        margin-right: 0px;
    
    }

`

export const ArrowCategory = styled.div`
    float: right;
    right: 10px;

    margin: 0px 10px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    background-color: red;
`

export const NameCategory = styled.div`
    float: center;

    width: 100%;

    background-color: blue;

    text-align: center;
`

export const IconCategory = styled.div`
    float: left;
    left: 10px;

    margin: 0px 10px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    background-color: red;
`
