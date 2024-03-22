import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/api";

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async (searchTerm, thunkAPI) => {
        const response = fetchData(searchTerm)
        return response
    }
)

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