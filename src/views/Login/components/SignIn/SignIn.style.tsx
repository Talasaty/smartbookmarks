import styled from "styled-components";



export const SignInContainer = styled.div`

    min-width: 360px;
    max-width: 400px;

    height: 500px;

    margin: 50px;

    background-color: ${p => p.theme.colors.white};

    border-radius: 15px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
export const SignInHeader = styled.div`
    width: 100%;
    height: 100px;

    background-color: ${p => p.theme.colors.blue};
    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const SignInInputContainer = styled.div`
    margin: 30px 10px;
`

export const Text = styled.p`
    float: right;
    
    margin: 10px 5px;

    text-transform: uppercase;

    font-weight: 500;

    font-size: 16px;
`


