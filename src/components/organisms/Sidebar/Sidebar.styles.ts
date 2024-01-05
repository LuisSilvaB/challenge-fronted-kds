import styled from "styled-components";

export const SidebarContainer = styled.section`
    width: 100px;
    min-width:100px; 
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #151515; 
    @media screen and (max-width: 468px) {
        width: 100%;
        height: auto;
        z-index: 20;
        position: fixed;
        flex-direction: row;
        bottom: 0px;
        left: 0px;
    }
`
export const SidebarTitle = styled.h2`
    font-family: 'Montserrat', sans-serif;
    color: white;
    height: auto;
    @media screen and (max-width: 468px) {
        display: none;
}
`
export const SidebarList = styled.ul`
    flex: 1;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 10px;
    flex-direction:column; 
    @media screen and (max-width: 468px) {
        width: 100%;
        height: auto;
        z-index: 20;
        flex-direction: row;
        bottom: 0px;
        left: 0px;
    }
`
