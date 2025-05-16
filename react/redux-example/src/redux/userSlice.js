import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: null,
        loading: true,
        error: false
    },
    // functions tp update the state
    reducers: {
        userLoading: state => {
            state.loading = true;
            state.error = false;
        },
        userError: state => {
            state.error = true;
            state.loading = false;
        },
        userData: (state, action) => {
            state.loading = false;
            state.user = action.payload
        }
    }
})

export default userSlice