import React, { ReactNode, useState, useEffect } from 'react'
import { OptionContainer, OptionTitle, OptionIcon } from './SidebarOption.styles';
import { useSelector } from 'react-redux';
import { Store } from '../../../interfaces/store';
import NotificationIndicator from '../../atoms/NotificationIndicator/NotificationIndicator';
import { Order } from '../../../interfaces/order';
interface SidebarOptionProps {
    title: string;
    icon: ReactNode;
    onClickHandler: (option:string, params:string) => void;
}
  
interface RootState {
    option: string;
}
  
const SidebarOption:React.FC<SidebarOptionProps>  = ({title, icon, onClickHandler}) => {
  const [active, setActive] = useState<boolean>(false);
  const [countOrders, setCountOrders] = useState<number>(0);
  const currentOption = useSelector((state:Store) => state.option )
  const orders = useSelector((state:Store) => state.orders )
  useEffect(()=>{
    const countOrdersTemp = orders.filter((order:Order) => order.state === title )
    setCountOrders(countOrdersTemp.length)
  },[orders, title])
  useEffect(()=>{    
    if(currentOption != title) setActive(false); else setActive(true);
  },[currentOption,title, active]); 

  const handleActive = () => {
    setActive(true);
    onClickHandler(title,'');
  }
  
  return (
    <OptionContainer onClick={ () => handleActive()} active = {active ? 'true' : undefined}>
        <OptionIcon>    
          {
            countOrders === 0 ? <></> : (
            <NotificationIndicator>
              {countOrders}
            </NotificationIndicator> )
          }
            {icon} 
        </OptionIcon>
        <OptionTitle>
            { title }    
        </OptionTitle>
    </OptionContainer>
  )
}

export default SidebarOption; 
