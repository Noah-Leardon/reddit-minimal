import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'post',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        clear: (state, action) => {
            return []
        }
    }
}

const postSlice = createSlice(options)

export const { add, clear } = postSlice.actions
export default postSlice.reducer