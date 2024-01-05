import styled from "styled-components";

interface TagContainerProps{
    background: string; 
    color: string;
}

export const TagContainer = styled.div<TagContainerProps>`
    box-sizing: border-box;
    padding: 4px;
    border-radius: 8px;
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.background};
    color: ${(props) => props.color};
`;
