import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../Slices/CommentsSlice/commentsSlice"
import postReducer from "../Slices/PostSlice/postSlice"
import callCountReducer from "../Slices/CallCountSlice/callCountSlice"

const store = configureStore({
    reducer: {
        comments: commentsReducer,
        post: postReducer,
        callCount: callCountReducer
    }
})

export default store