import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";
import { Meals } from "../../../interfaces/meals";

const baseUrl:string = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

export const getAllProducts = createAsyncThunk<Meals, void, { rejectValue: Error }>(
    'productsSlice/getAllProducts',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get<Meals>(baseUrl);
        const data: Meals = res.data;
        return data;
      } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(error as Error);
      }
    }
  );
const productsSlice = createSlice({
    name:'productsSlice', 
    initialState:{} as Meals,
    reducers:{}, 
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state:Meals, action:PayloadAction<Meals>) => {            
            return action.payload;            
            return state; 
        })
    },
})
 
export default productsSlice.reducer;
