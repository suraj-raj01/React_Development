import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CounterSlice";
const store = configureStore({
    reducer:{
        counter:countReducer
    }
})
export default store;