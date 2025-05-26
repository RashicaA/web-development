import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { useState, useEffect, lazy, Suspense } from 'react';

import LargeArraySum from './components/LargeArraySum';
import ItemCallback from './components/ItemCallback';
import UseRefExample from './components/UseRefExample';
import UseRefExampleTimer from './components/UseRefExample2';
import Stopwatch from './components/Stopwatch'

import Carousel from './components/Carousel';

import Modal from './components/Modal'

import useVisible from './components/UseVisible'

import WelcomeClass from './components/WelcomeClassComponent';
import WelcomeFucntional from './components/WelcomeFunctional';
import Todo from './components/TodoClass';
import TodoFunctional from './components/TodoFunctional';

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))


function App() {

  const { isVisible, show, hide, toggle } = useVisible(false)



  return (
    <>
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
          <ItemCallback />
          <UseRefExample />
          <UseRefExampleTimer />
          <Stopwatch />
          <Carousel />
        </div>
        <div style={{ margin: '20px' }}>
          <h1>Custom hook example</h1>
          <button onClick={show}>Show modal</button>
          <button onClick={hide}>Hide modal</button>
          <button onClick={toggle}>Toggle modal</button>
          <Modal isVisible={isVisible} hide={hide} />

        </div>

        <WelcomeClass name="ClassBased" />
        <WelcomeClass name="ClassBased part 2" />
        <WelcomeFucntional name="FunctionalBased" />
        <Todo />
        <TodoFunctional />
      </BrowserRouter>
    </>
  );
}

export default App;
