import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddleware } from './userMiddleware';

const User = () => {
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    const loading = useSelector((state) => state.userSlice.loading)
    const error = useSelector((state) => state.userSlice.error)
    const user = useSelector((state) => state.userSlice.user)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             setLoading(true);
    //             const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    //             const data = await res.json();
    //             console.log(data);
    //             setUser(data);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(true);
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [])

    useEffect(() => {
        dispatch(fetchUserMiddleware(2))
    }, [])

    if (loading) {
        return <h5>Loading users...</h5>
    }

    if (error) {
        return <h5>Error fetching users... please try again later.</h5>
    }

    return (
        <>
            <h5>Users</h5>
            <p>Name: {user?.name}</p>
            <p>Phone: {user?.phone}</p>
        </>
    )

}

export default User
