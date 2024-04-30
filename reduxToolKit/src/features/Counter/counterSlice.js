import { createSlice } from "@reduxjs/toolkit";

// const initialState = 0;

export const counterSlice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers:{
        add:(state)=>{
            return state + 1;
        },
        remove:(state)=>{
            return state - 1;
        }
    }
});


export const {add, remove} = counterSlice.actions
export default counterSlice.reducer