import styled from "styled-components";

export const HistoryContainer = styled.div`
  box-sizing: border-box;
  padding: 40px;
  border: 1px solid gray; 
  width: 100%;  
  height: 100%;
  overflow-y: scroll;
  background: white;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: row-reverse;
  justify-content: center;
  @media screen and (max-width: 468px) {
    padding: 10px;
  }
`