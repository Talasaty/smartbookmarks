import styled from 'styled-components'

export const SectionWrapper = styled.div`

    display: flex;
    flex-grow: 3;

    padding: 15px 20px;
    margin-top: 80px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 20px;

    background-color: white;

    overflow-x: hidden;
    overflow-y: auto;

    float: right;

    @media only screen and (max-width: 769px) {
        
        width: 100vw;
        justify-content: center;
        align-items: center;
    
    }
    
`