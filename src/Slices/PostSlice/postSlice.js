import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/api";

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async (searchTerm, thunkAPI) => {
        try {
            const response = await fetchData(searchTerm);
            const data = await response.json(); // Parse response data as JSON
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error; // Rethrow the error to reject the async thunk
        }
    }
)

const options = {
    name: 'post',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        clear: (state, action) => {
            return []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.posts = action.payload.data.children
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false
            state.hasError = true
        })
    }
}

const postSlice = createSlice(options)

export const { add, clear } = postSlice.actions
export default postSlice.reducer