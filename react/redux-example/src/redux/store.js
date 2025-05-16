import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import todoReducer from './todoSlice'
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        userSlice: userSlice.reducer
    }
})

export default store;