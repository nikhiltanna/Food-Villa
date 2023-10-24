import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        //Here is the mapping between actiona nd the reducers
        additem:(state,action)=>{
            state.items.push(action.payload);
            //Dont return anything form it as it takes a state and directly modify it
        },
        clearcart:(state)=>{
            state.items=[];

        }
    }
});

export const{additem,clearcart}=cartSlice.actions;

export default cartSlice.reducer;