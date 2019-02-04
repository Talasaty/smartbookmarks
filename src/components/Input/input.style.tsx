import styled from "styled-components";

interface Props {
    backgroundColor?: string
    textColor?: string
    iconLeft?: string
    iconRight?: string
}

export const InputContainer = styled.div.attrs({})<Props>`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;

    height: 40px;
    width: 100%;
    max-width: 450px;

    border-radius: 10px;
    border: 1px solid ${p => p.backgroundColor};

    background-color: ${p => p.backgroundColor};
    

    @media only screen and (max-width: 769px) {
        
        width: 100vw;
        max-width: 100vw;
        margin-left: 0px;
        margin-right: 0px;
    
    }

`

export const LeftIcon = styled.img.attrs({})<Props>`
    float: right;
    right: 10px;

    margin: 0px 15px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    background-color: ${p => p.backgroundColor};
`

export const InputStyled = styled.input.attrs({})<Props>`
    float: center;

    width: 100%;

    background-color: ${p => p.backgroundColor};

    text-align: right;

    font-size: 1.2em;
    color: ${p => p.textColor};

    border: none;

    outline: none;

`

export const RightIcon = styled.img.attrs({})<Props>`
    float: left;
    left: 10px;

    margin: 0px 15px;

    height: 20px;
    width: 20%;
    max-width: 20px;

    background-color: ${p => p.backgroundColor};
`
