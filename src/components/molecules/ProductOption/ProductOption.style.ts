import styled from "styled-components";

export const ProductOptionContainer = styled.div`
    box-sizing:border-box; 
    padding: 10px;
    display:flex; 
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width:150px; 
    height:auto;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(0.9);
    }
`
export const ProductImg = styled.img`
    display:flex; 
    border-radius: 100%;
    flex-direction:column;
    width:90px; 
    height:90px;
`
export const ProductId = styled.p`
    margin:0px;
    color:black;
    font-family: 'Montserrat', sans-serif;
    `
export const ProductName = styled.p`
    margin:0px;
    font-weight: 500;
    color:black; 
    font-family: 'Montserrat', sans-serif;
    overflow:hidden;
    max-width:130px;
    position:relative;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const ProductOptionContainerList = styled.div`
    box-sizing:border-box; 
    padding: 10px;
    display:flex; 
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    width:100%; 
    height:auto;
    border-bottom: solid 1px #f4f4f4;
    transition: all 0.2s ease-in-out;
`
export const ProductImgList = styled.img`
    display:flex; 
    border-radius: 100%;
    flex-direction:column;
    width:50px; 
    height:50px;
`
export const ProductNameList = styled.p`
    margin:0px;
    font-weight: 500;
    color:black; 
    font-family: 'Montserrat', sans-serif;
    overflow:hidden;
    width:60%;
    position:relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: start;
`
