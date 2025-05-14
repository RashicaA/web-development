import { createSlice, configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice';
import todoReducer from './todoSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    }
})

export default store;