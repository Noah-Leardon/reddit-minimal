import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'post',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((post) => {
                return post.id !== action.payload
            })
        }
    }
}

const postSlice = createSlice(options)

export const { add, remove } = postSlice.actions
export default postSlice.reducer