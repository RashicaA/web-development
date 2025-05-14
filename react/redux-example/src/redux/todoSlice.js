import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value: "",
        todoList: ["exercise", "code"]
    },
    reducers: {
        addValue(state, action) {
            console.log("action ", action);
            state.value = action.payload;
        },
        addTask(state) {
            // on add btn click, in my existing todolist, we push new task ( from input value)
            state.todoList.push(state.value);
            state.value = ''
        }
    }
})

export const { addValue, addTask } = todoSlice.actions
export default todoSlice.reducer