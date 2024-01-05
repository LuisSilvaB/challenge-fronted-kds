import { configureStore } from '@reduxjs/toolkit'; 
import optionReducers from '../features/option/option'
import productsReducers from '../features/meals/products'
import ordersReducers from '../features/order/orders'
export const store = configureStore({
    reducer:{
        option:optionReducers,
        products:productsReducers, 
        orders:ordersReducers,
    }
}) 
