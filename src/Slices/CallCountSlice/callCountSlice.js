import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'callCount',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + 1
        },
        clear: (state, action) => {
            return 0
        }
    }
}

const callCountSlice = createSlice(options)

export const { increment, clear } = callCountSlice.actions
export default callCountSlice.reducer