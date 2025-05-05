import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

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
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Routing



