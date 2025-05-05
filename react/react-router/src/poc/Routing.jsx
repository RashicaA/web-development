import React, { useEffect, useState } from 'react';

import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

function About() {
    return <h3>I am about page.</h3>
}

function Home() {
    return <h3>I am home page.</h3>
}

function Careers() {
    return <h3>I am careers page.</h3>
}

function PageNotFound() {
    return <h3>404 - Page not found. Please check URL.</h3>

}

function Users(props) {
    let params = useParams();
    const userId = params.id;
    console.log("params", params);

    let [user, setUser] = useState(null)

    useEffect(() => {
        (async function () {
            try {
                const resp = await fetch(`https://fakestoreapi.com/users/${userId}`);
                const userData = await resp.json();
                console.log(userData);
                setUser(userData);
            } catch (error) {

            }

        })()
    }, [])


    return <>
        {user === null ? <h5>Loading...</h5>
            : <><p>
                Name: {user.name.firstname} {user.name.lastname}
            </p>
                <p> Phone: {user.phone}</p></>}
    </>

}

function Routing() {
    return (
        <>
            <h2>Routing example</h2>
            <nav>
                <ul>
                    <li>
                        <Link to={'/about/*'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/home'}>Home</Link>

                    </li>
                    <li>
                        <Link to={'/careers'}>Careers</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/careers' element={<Careers />} />

                {/* redirection of route.. */}
                <Route path='/abc' element={<Navigate to='/home' />} />

                {/* dynamic routing...  */}
                <Route path='/users/:id' element={<Users />} />

                {/* wildcard routing... */}
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Routing



