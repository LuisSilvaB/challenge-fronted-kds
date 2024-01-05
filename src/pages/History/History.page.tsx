import React from 'react'
import { HistoryContainer } from './History.styles';
import { useSelector } from 'react-redux';
import { Store } from '../../interfaces/store';
import { Order } from '../../interfaces/order';
import Card from '../../components/organisms/card/Card';
const HistoryPage = () => {
  const orders = useSelector((state:Store) => state.orders)
  return (
    <HistoryContainer>
      {orders.map((order:Order) => (
        <Card order={order} options={{name:"none", primaryColor:'gray', secundaryColor:'gray'}}></Card>
      ))}
    </HistoryContainer>
  )
}
export default HistoryPage; 