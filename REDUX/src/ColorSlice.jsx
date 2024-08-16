import { createSlice } from "@reduxjs/toolkit";
const ColorSlice = createSlice({
    name: "bgcolor",
    initialState: {
        color: "pink"
    },
    reducers: {
        changeColor: (state) => {
            state.color = "blue";
        }
    }
})
export default ColorSlice.reducer;
export const { changeColor } = ColorSlice.actions;