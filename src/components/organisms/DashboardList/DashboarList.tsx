import React from 'react'
import { DashboardListContainer, DashboardListInfo, DashboardListIndicator, DashboardListTitle, DashboardListItems } from './DashboardList.styles';
import { Order } from '../../../interfaces/order';
import { useDispatch } from 'react-redux';
import { FilterOrder } from '../../../redux/features/order/orders';
import Card from '../card/Card';
interface DashboardListProps{
    options:{
        name:string,
        primaryColor:string,
        secundaryColor:string,
    },
    orders:Order[], 
}

const DashboarList:React.FC<DashboardListProps> = ({orders, options}) => {   
  return (
    <DashboardListContainer>
        <DashboardListInfo>
          <DashboardListIndicator background = {options.primaryColor} />
          <DashboardListTitle>{options.name} ({orders.length})</DashboardListTitle>
        </DashboardListInfo>
        <DashboardListItems>
          {orders.map((order, index) => {
            return (
              <Card key={index} order={order} options={options}></Card>
            )
          })}
        </DashboardListItems>
    </DashboardListContainer>
  )
}

export default DashboarList; 