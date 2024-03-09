import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'comments',
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

const commentsSlice = createSlice(options)

export const { add, clear } = commentsSlice.actions
export default commentsSlice.reducer