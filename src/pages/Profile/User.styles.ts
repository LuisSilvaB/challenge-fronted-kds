import styled from "styled-components";

interface UserTextProps {
    fontsize: string;
    fontweight: string;
    color?: string;
}

export const UserContainer = styled.section`
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UserInfoContainer = styled.section`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const UserImage = styled.img`
    width: 30%;
`
export const UserAndProjectInfo = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #151515;
    font-size: 24px;
    font-weight: 700;
`
export const UserLink = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const UserText = styled.p<UserTextProps>`
    font-family: 'Montserrat', sans-serif;
    margin: 0px;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontsize};
    font-weight: ${(props) => props.fontweight};
`
export const UserContainerTechnologies = styled.div`
    display: flex;
    width: 100%;
    gap:20px;
    flex-direction: row;
`
export const UserContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
`

