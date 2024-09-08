import { createSlice } from "@reduxjs/toolkit";
const CounterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increament:(state)=>{
            state.count = state.count+10;
        },
        decreament:(state)=>{
            if(state.count!=0){
            state.count = state.count-10;
            }else{
                alert("not decreased")
            }
        },
        reset:(state)=>{
            state.count = state.count*0;
        }
    }
})
export default CounterSlice.reducer;
export const{increament,decreament,reset} = CounterSlice.actions;