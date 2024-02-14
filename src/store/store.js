import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "./todoSlicer"

export default configureStore({
    reducer: {
        todos: todoSlicer,
    }
})