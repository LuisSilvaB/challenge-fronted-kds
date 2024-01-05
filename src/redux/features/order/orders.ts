import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../../interfaces/order';
import { ordersData } from "../../../utils/ordersData";
const ordersSlice = createSlice({
    name:'orderSlice', 
    initialState:ordersData,
    reducers:{
        AddOrder: ((state, action:PayloadAction<Order>) => {
            state.push(action.payload);
        }), 
        DeleteOrder: ((state, action) => {
            state = state.filter((order) => order.id !== action.payload);
        }),
        UpdateOrder: (state, action: PayloadAction<Order>) => {
            const index = state.findIndex((order) => order.id === action.payload?.id);
            if (index !== -1) {
              state[index] = action.payload;
            }
          },
    }
}); 
export const { AddOrder, UpdateOrder, DeleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer; 