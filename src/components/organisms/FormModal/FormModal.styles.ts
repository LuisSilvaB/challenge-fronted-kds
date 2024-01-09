import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content:center; 
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
`
export const FormShadow = styled.div`
    transition: all 0.3s ease-in-out;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.4;
    position: absolute;
    height: auto;
`;
export const Form = styled.div`
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    position: absolute;
    width: 80%;
    min-width:200px;
    height: 90%;
    display: flex;
    background:white;
    flex-direction: column;
`
export const FormTitle = styled.h3`
     font-family: 'Montserrat', sans-serif;
     margin: 15px;
     color: black;
     font-size: 30px;
     font-weight: 700;
`

export const FormContent = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border:solid 1px gray;
    padding-bottom: 20px;
    border-radius: 8px;
`

export const ItemsList = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    border:solid 1px gray;
    flex:1;
    justify-content: center;
    padding: 10px;
    height: 100%;
`
export const Counter = styled.div`
    box-sizing: border-box;
    width: 25%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
` 
export const CounterTitle = styled.h4`
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    width: 100%;
    color: black;
    font-size: 30px;
`
export const SubTitle = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    width: 100%;
    color: black;
    font-size: 15px;
`
export const CounterList = styled.ul`
    overflow-y: scroll;
    padding: 0px;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid gray; 
    border-radius: 8px;
`
