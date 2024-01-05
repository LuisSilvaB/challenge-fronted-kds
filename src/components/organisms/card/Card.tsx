import React, {useState, useEffect} from 'react'
import { CardContainer, CardHeader, CardDetails, CardButtons, CardText, TimeContainer, TimeAndStateContainer } from './Card.style';
import { TagContainer } from '../../atoms/Tag/Tag.styles';
import { Order } from '../../../interfaces/order';
import { HiDotsHorizontal } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { UpdateOrder } from '../../../redux/features/order/orders';
import { IoMdTime } from "react-icons/io";
import Button from '../../atoms/Button/Button';
import { BsPrinter } from "react-icons/bs";
import ProductOption from '../../molecules/ProductOption/ProductOption';
interface cardProps {
  order: Order; 
  options:{
    name:string,
    primaryColor:string,
    secundaryColor:string,
},
}
const Card:React.FC<cardProps> = ({order, options}) => {
  const dispatch = useDispatch();
  const [orderInfo, SetOrderInfo] = useState<Order>(); 
  useEffect(() => {
    SetOrderInfo(order); 
  },[])
  const date = new Date(parseInt(order.date)); 
  const handleTimeStatus = () => {
    const dateNow = new Date().getTime();
    const orderDateTimestamp = parseInt(order.date);
    const differenceInMilliseconds = dateNow - orderDateTimestamp ;
    const minutes:number = Math.floor(differenceInMilliseconds / 60000);
    
    if (minutes < 1) {
      SetOrderInfo({...order, timeStatus:'Just Created'});
    } else if (1 <= minutes && minutes < 2) {
      SetOrderInfo({...order, timeStatus:'On Time'});
    } else if ( 3 <= minutes ) {
      SetOrderInfo({...order, timeStatus:'Late'});
    }
  }
  const handleState = (typeButton: string) => {
    console.log('Estoy en el boton', typeButton);
    
    if (typeButton === 'Start') {
      SetOrderInfo({...order, state: 'In Progress' });
    } if (typeButton === 'Finish') {
      SetOrderInfo({...order, state: 'Complete' });
    } if (typeButton === 'Cancel') {
      SetOrderInfo({...order, state: 'Cancel' });
    }
  };
  const renderButtons = () => {
    if (order.state === 'Current') {
      return (
        <CardButtons>
          <Button onClick={() => handleState('Start')} width='40%' background='#066eb5' position='relative' text='Start' />
          <Button onClick={() => handleState('Cancel')} width='40%' background='#476070' position='relative' text='Cancel' />
        </CardButtons>
      )
    }
    else if (order.state === 'In Progress') {
      return (
        <CardButtons>
          <Button onClick={() => handleState('Finish')} width='40%' background='#eb522f' position='relative' text='Finish' />
          <Button onClick={() => handleState('Cancel')} width='40%' background='#476070' position='relative' text='Cancel' />
        </CardButtons>
      )
    }
  }
  useEffect(()=>{
    setInterval(()=>{
      handleTimeStatus(); 
    },60000)
  },[order])

  useEffect(() => {
    dispatch(UpdateOrder(orderInfo));
  }, [dispatch, orderInfo]);

  return (
    <CardContainer>
      <CardHeader background={options.secundaryColor}>
        <TagContainer color={'white'} background={options.primaryColor} >
          <CardText fontSize={'0.9rem'} background='transparent' fontWeight='500'>{order.timeStatus}</CardText>
          <IoMdTime size = {20}/>
        </TagContainer>
        <Button background={'transparent'} children = {<HiDotsHorizontal size={30} color = {'black'}/>}  position={'relative'}></Button>
      </CardHeader>
      <CardDetails>
        <TimeAndStateContainer>
          <TimeContainer>
            <CardText color='gray' fontSize='0.8rem'>
              Created at
            </CardText>
            <CardText color='gray' fontSize='0.8rem'>
              {date.getHours().toString().padStart(2,'0')}:{date.getUTCMinutes().toString().padStart(2,'0')}:{date.getUTCSeconds().toString().padStart(2,'0')}
            </CardText>
          </TimeContainer>
          <CardText color='gray' fontSize='0.9rem' fontWeight='500'>
            {order.state}
          </CardText>
        </TimeAndStateContainer>
          <CardText color='black' fontSize='1.2rem' fontWeight='600'>
            {`#${order.id.padStart(3,'0')}`}
          </CardText>
      </CardDetails>
      <CardDetails background='#f4f4f4' padding='10px'>
        <CardText color='black' fontWeight='600'>KDS Store</CardText>
        <BsPrinter color = 'black' size ={'30'}/>
      </CardDetails>
      <CardDetails flexdirection='column'>
        {
          order.products.map((product, index) => {
            return (
              <ProductOption key={index} type={'list'} product={product} order={order} disabledButton = {true}/>
            )
          })
        }
      </CardDetails>
        {
          renderButtons()
        }
    </CardContainer>
  )
}

export default Card;
