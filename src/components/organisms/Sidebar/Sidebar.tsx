import { FaBellConcierge } from "react-icons/fa6";
import { BiLoader } from "react-icons/bi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { GrHistory } from "react-icons/gr";
import { SidebarContainer, SidebarTitle, SidebarList } from './Sidebar.styles';
import { useDispatch } from 'react-redux';
import { setOption } from '../../../redux/features/option/option';
import { useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SidebarOption from '../../molecules/SidebarOption/SidebarOption';

 const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleOption = (option:string, params:string) =>{
    dispatch(setOption(option));
    if (option === 'History') handleNavigate('history')
    else if (option === 'User') handleNavigate('user')
    else handleNavigate(params); 
  }
  const handleNavigate = (params:string) => {    
    navigate(`/${params}`);
  }; 

  return (
      <SidebarContainer>
        <SidebarTitle>KDS</SidebarTitle>
        <SidebarList>
          <SidebarOption onClickHandler={handleOption} title={'Current'} icon = {<FaBellConcierge size = {40}/>}/>
          <SidebarOption onClickHandler={handleOption} title={'In Progress'} icon = {<BiLoader size = {40}/>}/>
          <SidebarOption onClickHandler={handleOption} title={'Complete'} icon = {<IoCheckmarkCircleSharp size = {40}/>}/>
          <SidebarOption onClickHandler={handleOption} title={'Cancel'} icon = {<MdCancel size = {40}/>}/>
          <SidebarOption onClickHandler={handleOption} title={'History'} icon = {<GrHistory size = {40}/>}/>
          <SidebarOption onClickHandler={handleOption} title={'User'} icon = {<FaUser size = {40}/>}/>
        </SidebarList>
      </SidebarContainer>
    )
}
export default Sidebar; 