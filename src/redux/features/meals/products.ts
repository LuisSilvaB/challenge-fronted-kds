import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";
import { Meal, Meals } from "../../../interfaces/meals";

const baseUrl:string = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

export const getAllProducts = createAsyncThunk('productsSlice/getAllProducts', async()=>{
    try {
        const res = await axios.get<Meals>(baseUrl);
        const data:Meals = res.data;        
        return data;        
    } catch (error) {
        console.log(error);
        throw error; 
    }
})

const productsSlice = createSlice({
    name:'productsSlice', 
    initialState:{} as Meals,
    reducers:{}, 
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state:Meals, action:PayloadAction<Meals>) => {            
            return action.payload;            
        })
    },
})
 
export default productsSlice.reducer;
