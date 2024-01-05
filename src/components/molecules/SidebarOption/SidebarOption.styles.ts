import styled from "styled-components";

interface OptionContainerProps{
    active: string | undefined;
}

export const OptionContainer = styled.li<OptionContainerProps>`
    width: 100%;
    height: auto; 
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    color: ${(props) => (props.active ? '#2ba0dc' : 'white')};
    background-color: ${(props) => (props.active ? '#373737' : 'transparent')};
    align-items: center;
    &:hover{
        cursor: pointer;
    } 
`;
export const OptionIcon = styled.div`
    position: relative;
    padding: 0;
    height: auto;
`
export const OptionTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight:700; 
    margin:0;
    font-size: 0.8rem;
`

