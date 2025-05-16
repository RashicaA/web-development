import userSlice from '../src/redux/userSlice';

const action = userSlice.actions;

export const fetchUserMiddleware = (param) => {
    return async (dispatch) => {
        try {
            dispatch(action.userLoading());
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const data = await res.json();
            console.log(data);
            dispatch(action.userData(data))
        } catch (error) {
            dispatch(action.userError())
        }
    }
}