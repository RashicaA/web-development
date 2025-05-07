import './App.css';
import Home from './components/Home';
import WatchList from './components/WatchList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<WatchList />} />
      </Routes>

    </>
  );

}

export default App
