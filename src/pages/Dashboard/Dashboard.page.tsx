import React, { useEffect, useState } from 'react';
import DashboarList from '../../components/organisms/DashboardList/DashboarList';
import { DashboardContainer } from './Dashboard.styles';
import { timeStatus } from '../../utils/config';
import { useSelector } from 'react-redux';
import { Store } from '../../interfaces/store';
import { Order } from '../../interfaces/order';
import Button from '../../components/atoms/Button/Button';
import { IoMdAdd } from "react-icons/io";
import FormModal from '../../components/organisms/FormModal/FormModal';

const DashboardPage = () => {
  const [activeForm, setActiveForm] = useState<boolean>(false)
  const [orders, setOrders] = useState<Order[]>([])
  const ordersReduxState = useSelector((state:Store) => state.orders)
  const option = useSelector((state:Store) => state.option)

  const FilterOrderByState = React.useMemo(() => {
    return () => ordersReduxState.filter((order) => order.state === option);
  }, [ordersReduxState, option]);
  
  const handleForm = () => {
    setActiveForm(!activeForm);
  }; 
  useEffect(() => {
    const ordersFilter = FilterOrderByState(); 
    setOrders(ordersFilter);
  }, [FilterOrderByState]);
  
  return (
    <DashboardContainer>
      <Button children={<IoMdAdd size = {35}/>} background='#2ba0dc' position='absolute' bottom='40px' right='60px' onClick={handleForm}/>
      { timeStatus.map((_, index) => {
        const filterOrders = orders.filter((order) => order.timeStatus === timeStatus[index].name);
        return (
          <DashboarList key = {index} orders ={filterOrders} options ={timeStatus[index]} />
        )
      })}
      { activeForm ? <FormModal handleForm={handleForm} />: <></>}
    </DashboardContainer>    
  )
}

export default DashboardPage; 