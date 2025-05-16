import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";

const store = configureStore({
    reducer: {
        PaginationSlice: paginationSlice.reducer
    }
})

export default store;