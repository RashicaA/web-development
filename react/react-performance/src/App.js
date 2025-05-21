import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { useState, useEffect, lazy, Suspense } from 'react';

import LargeArraySum from './components/LargeArraySum';

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))



function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Link to={'/'} >
              <li>Home</li>
            </Link>
            <Link to={'/about'} >
              <li>About</li>
            </Link>
            <Link to={'/contact'} >

              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
        <LargeArraySum />
      </div>
    </BrowserRouter>
  );
}

export default App;
