import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import { useState, useEffect } from 'react';

function App() {

  const [Home, setHome] = useState(null);
  const [About, setAbout] = useState(null);
  const [Contact, setContact] = useState(null);

  useEffect(() => {
    // Preload the home page...
    import('./components/Home').then(module => setHome(() => module.default))

  }, [])

  const loadHomePage = () => {
    import('./components/Home').then(module => setHome(() => module.default))
  }

  const loadAboutPage = () => {
    import('./components/About').then(module => setAbout(() => module.default))
  }

  const loadContactPage = () => {
    import('./components/Contact').then(module => setContact(() => module.default))
  }


  return (

    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Link to={'/'} onClick={loadHomePage}>
              <li>Home</li>
            </Link>
            <Link to={'/about'} onClick={loadAboutPage}>
              <li>About</li>
            </Link>
            <Link to={'/contact'} onClick={loadContactPage}>

              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={Home ? <Home /> : <div>Loading...</div>} />
          <Route path='/about' element={About ? <About /> : <div>Loading...</div>} />
          <Route path='/contact' element={Contact ? <Contact /> : <div>Loading...</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
