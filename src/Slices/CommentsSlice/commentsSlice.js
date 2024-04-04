import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../api/api";

export const fetchComments = createAsyncThunk('comments/fetchComments', 
    async (apiData, thunkAPI) => {
        try {
            const response = await fetchData(apiData.searchTerm, apiData.type, apiData.sort, apiData.postId);
            const data = await response.json(); // Parse response data as JSON
            return data;
        } catch (error) {
            console.error(`Error fetching comments: ${error}`);
            throw error; // Rethrow the error to reject the async thunk
        }
})

const options = {
    name: 'comments',
    initialState: {
        comments: [],
        postId: undefined,
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
            .addCase(fetchComments.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false
            state.hasError = false
            state.comments = action.payload[1].data.children
            state.postId = action.meta.arg.postId
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false
            state.hasError = true
        })
    }
}

const commentsSlice = createSlice(options)

export const { clear } = commentsSlice.actions
export default commentsSlice.reducer