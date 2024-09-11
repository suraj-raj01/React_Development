import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        },
        recDelete:(state,actions)=>{
            state.task = state.task.filter(key=>key.id!=actions.payload)
        },
        complete:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].status = true;
                }
            }
        },
        uncomplete:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].status = false;
                }
            }
        },
        editsavedata:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].work = actions.payload.work;
                }
            }
        }
    }
})
export default todoSlice.reducer;
export const {addTask,recDelete,complete,uncomplete,editsavedata} = todoSlice.actions;