import styled from "styled-components";

interface DashboardListIndicatorProps {
    background:string; 
}
export const DashboardListContainer = styled.div`
  padding: 0px;
  height: 99%;
  flex: 1;
  min-width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  overflow-y: scroll; 
  border-radius: 10px;

  ::-webkit-scrollbar {
    background: white;
    height: 10px;
    width: 10px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #060c14;
    border-radius: 20px;
    width: 5px;
  }
`;
export const DashboardListInfo = styled.div`
    top: 0;
    position:sticky; 
    width: 100%;
    height: auto;
`
export const DashboardListIndicator = styled.div<DashboardListIndicatorProps>`
    width: 100%;
    height: 10px;
    background-color: ${(props)=> props.background};
`
export const DashboardListTitle = styled.p`
    box-sizing: border-box;
    background-color: white;
    margin:0px; 
    padding: 10px;
    display: flex;
    justify-content:center;
    width: 100%;
    height: 20px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: black;
    text-align: center;
`
export const DashboardListItems = styled.ul`
    box-sizing: border-box;
    display: flex;
    padding:0px;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 20px;
    flex: 1;
    height: auto;
    text-align: center;
`