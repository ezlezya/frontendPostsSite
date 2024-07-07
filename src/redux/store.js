import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./firstSlicer";

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})