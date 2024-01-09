import styled from "styled-components";

interface CardHeaderProps {
    background:string;
}

interface cardTextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    background?: string;
}

interface CardDetailsProps {
    background?:string;
    padding?: string;
    flexdirection?: string;
}

export const CardContainer = styled.div`
    box-sizing:border-box; 
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: fit-content;
    @media screen and (max-width: 468px) {
        width: 80%;
        min-width: 100px;
    }
`; 
export const CardHeader = styled.div<CardHeaderProps>`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    gap: 20px;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    background-color: ${(props) => props.background};
`; 
export const CardDetails = styled.div<CardDetailsProps>`
    box-sizing: border-box;
    padding: ${(props) => props.padding || '5px'};
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items:center; 
    gap: 20px;
    flex-direction: ${(props)=>props.flexdirection || 'row'};
    background: ${(props) => props.background};
    `
export const CardText = styled.p<cardTextProps>`
    margin:0px; 
    padding: 5px;
    color: ${(props) => props.color};
    font-family: 'Montserrat', sans-serif;
    font-size: ${(props) => props.fontSize};
    font-weight:${(props) => props.fontWeight}; 
    background: ${(props)=> props.background};
    display: flex;
    gap: 10px;
`
export const TimeAndStateContainer = styled.div`

`
export const TimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
export const CardButtons = styled.div`
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content:space-around;
    align-items:center;
`