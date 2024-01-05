import styled from "styled-components";

interface ButtonContainerProps{
    backbround: string;
    position:string;
    top?:string;
    bottom?:string;
    left?:string;
    right?:string;
    width?:string;
}
export const ButtonContainer = styled.div<ButtonContainerProps>`
    transition: all ease-in-out 0.2s;
    position: ${(props) => (props.position)};
    padding: 10px;
    right: ${(props) => (props.right) || 'auto'};
    bottom: ${(props) => (props.bottom) ||'auto'}; 
    left: ${(props) => (props.left || 'auto')};
    top: ${(props) => (props.top) || 'auto'};
    display: flex;
    width: ${(props)=> props.width || 'auto'};
    justify-content: center;
    align-items: center;
    height: auto;
    background-color: ${(props) => (props.backbround)};
    border-radius: 8px;
    color: white;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(0.9);
    }
`;