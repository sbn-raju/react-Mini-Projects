import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    formDatas : [{id: 1, firstname:"rahul", lastname:"Kumar"},{id: 1, firstname:"rahul", lastname:"Kumar"

    }]
}

export const formSlice = createSlice({
    name:'form',
    initialState,
    reducers:{
        add: (state, action)=>{
            const formData = {
                id:nanoid(),
                firstname:action.payload.firstname,
                lastname:action.payload.lastname,
            }
            state.formDatas.push(formData);
        }
    }

});

export const {add} = formSlice.actions;
export default formSlice.reducer