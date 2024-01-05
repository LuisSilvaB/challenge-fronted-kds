import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:string = "Current";

const optionSlice = createSlice ({
    name: 'optionSlice',
    initialState,
    reducers: {
        setOption: (state, action:PayloadAction<string>) => {
            state = action.payload
            return state; 
        }
    }
})

export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;

