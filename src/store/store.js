import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../Slices/CommentsSlice/commentsSlice"
import postReducer from "../Slices/PostSlice/postSlice"

const store = configureStore({
    reducer: {
        comments: commentsReducer,
        post: postReducer,
    }
})

export default store