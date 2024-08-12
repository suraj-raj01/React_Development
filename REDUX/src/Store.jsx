import { configureStore } from "@reduxjs/toolkit";
import clrReducer from "./ColorSlice";
const Store = configureStore({
    reducer: {
        bgcolor: clrReducer
    }
})
export default Store;