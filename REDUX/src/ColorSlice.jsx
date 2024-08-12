import { createSlice } from "@reduxjs/toolkit";
const ColorSlice = createSlice({
    name: "bgcolor",
    initialState: {
        color: "pink"
    },
    reducers: {
        changeColor: (state, actions) => {
            state.color = actions.payload;
        }
    }
})
export default ColorSlice.reducer;
export const { changeColor } = ColorSlice.actions;