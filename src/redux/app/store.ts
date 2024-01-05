import { configureStore } from '@reduxjs/toolkit';
import optionReducers from '../features/option/option';
import productsReducers from '../features/meals/products';
import ordersReducers from '../features/order/orders';

const store = configureStore({
  reducer: {
    option: optionReducers,
    products: productsReducers,
    orders: ordersReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
