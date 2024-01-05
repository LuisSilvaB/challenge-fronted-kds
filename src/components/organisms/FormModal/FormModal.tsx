import React, { useEffect, useState, useRef } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../../interfaces/store';
import { Meal, Meals } from '../../../interfaces/meals';
import { Order } from '../../../interfaces/order';
import { FormShadow, FormContainer, Form, FormTitle, FormContent, Counter, ItemsList, CounterTitle, CounterList, SubTitle } from './FormModal.styles';
import { AddOrder } from '../../../redux/features/order/orders';
import Button from '../../atoms/Button/Button';
import ProductOption from '../../molecules/ProductOption/ProductOption';
import moment from 'moment';

interface FormModalProps {
  handleForm:() => void;
}
const FormModal:React.FC <FormModalProps> = ({handleForm}) => {
  const [order, setOrder] = useState<Order>(); 
  const [time, setTime] = useState<string>(); 
  const dispatch = useDispatch();
  const products = useSelector((state:Store) => state.products)
  const orders = useSelector((state:Store) => state.orders)
  const intervalRef = useRef<number>();
  
  const updateTime = () => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    setTime(time);
  }
  const addProduct = (product:Meal) => {
    const tempProductsList = order?.products;
    tempProductsList?.push(product); 
    setOrder({...order, products: tempProductsList});
  }

  const dropProduct = (position:number) => {
    const tempProductsList = order?.products.filter( (productOrder, index) => index !== position)
    setOrder({...order, products: tempProductsList});
  }
  const createOrder = () => {
    const date = new Date().getTime().toString();
    const newOrder = {
      ...order,
      date: date,
      state: 'Current',
      timeStatus: 'Just Created',
    };
  
    setOrder(newOrder);
  
    if (newOrder.products.length > 0) {
      dispatch(AddOrder(newOrder));
    }
  
    handleForm();
  };

  useEffect(()=>{
      setOrder({
        date: new Date().getTime().toString(),
        id:(orders.length + 1).toString(),
        state:'Current',
        products:[] as Meal[],
      })
      intervalRef.current = setInterval(()=>{
        updateTime()
      },1000)
      
      return () => {
        clearInterval(intervalRef.current);
      };
  },[setOrder]);
  
  return (
    <FormContainer>
      <FormShadow/>
      <Form>
        <Button onClick={handleForm} children = {<IoCloseSharp size = {40}/>} background={'red'} position={'absolute'} right={'20px'} top={'25px'}></Button>
        <FormTitle>Create Order</FormTitle>
        <FormContent>
          <ItemsList>
            {
              products.meals.map((product, index) => {
                return (
                  <ProductOption key={index}  product={product} addProduct={addProduct} type={'card'}></ProductOption>
                )
              })
            }
          </ItemsList>
          <Counter>
            <CounterTitle>Order</CounterTitle>
            <SubTitle>{time}</SubTitle>
            <CounterList>
              {
                order?.products.map((product, index) => {
                  return(
                    <ProductOption key={index}  product={product} type={'list'} position = {index} deleteProduct={dropProduct}/>
                  )
                })
              }
            </CounterList>
            <Button background='green' position='relative' text='Create Order' onClick={createOrder}></Button>
          </Counter>
        </FormContent>
      </Form>
    </FormContainer>
        
  )
}
export default FormModal;