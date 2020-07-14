import {createSlice} from "@reduxjs/toolkit";

const setHeaderVisibility = createSlice({
    name: "HeaderVisibility",
    initialState: { header: { visible: true } },
    reducers: {
        setvisible: (state, action) => {
            state.header.visible = action.payload
        }
    }
})
// dispath하기 위해 필효한 action 
export const { setvisible } = setHeaderVisibility.actions;
// store.js 에서 사용하기 위한 export
export default setHeaderVisibility.reducer;
