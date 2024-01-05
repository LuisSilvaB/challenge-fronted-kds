import { UserContainer, UserLink, UserInfoContainer, UserImage, UserText, UserAndProjectInfo, UserContainerTechnologies, UserContainerButtons } from './User.styles';
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents, SiRedux, SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import Button from '../../components/atoms/Button/Button';


const User = () => {
  return (
    <UserContainer>
        <UserInfoContainer>
            <UserImage src='https://avatars.githubusercontent.com/u/104279834?v=4'/>
            <UserAndProjectInfo>
                <UserText fontsize='1.8rem' fontweight='600'>Luis Armando Silva Balladares</UserText>
                <UserText fontsize='1.2rem' fontweight='400'>This page was created with</UserText>
                <UserContainerTechnologies>
                    <FaReact size = {40} color = {'#00d8ff'}/>
                    <SiRedux size = {40} color = {'#764abc'}/>
                    <SiTypescript size = {40} color = {'#007acc'}/>
                    <SiStyledcomponents size = {40} color= {'#F14E3A'}/>
                </UserContainerTechnologies>
                <UserContainerButtons>
                    <Button background='#0d1117' position='relative' children = {
                        <UserLink href='https://github.com/LuisSilvaB/reto-fronted-kds' target='_blank'>
                            <UserText fontsize='0.9rem' fontweight='400' color = {'white'}>Github</UserText>
                            <FaGithub color = {'white'}/>
                        </UserLink>
                    }/>
                    <Button background='#F4F4F4' position='relative' children = {
                        <UserLink href='https://portafolio-kappa-mocha.vercel.app/' target='_blank'>
                            <UserText fontsize='0.9rem' fontweight='400' color='black'>Portafolio</UserText>
                            <MdOutlineWebAsset color = {'black'} />
                        </UserLink>
                    }></Button>
                </UserContainerButtons>
            </UserAndProjectInfo>
        </UserInfoContainer>
    </UserContainer>
  )
}

export default User; 