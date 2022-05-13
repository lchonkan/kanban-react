import './App.css';
import Board from './components/Layout/Board';
import NavBar from './components/Layout/NavBar';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './views/Login';
import Boards from './views/Boards';
import Profile from './views/Profile';
import Welcome from './views/Welcome';
import CurrentBoard from './views/CurrentBoard';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/board' element={<CurrentBoard />} />
        <Route path='/home' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/boards' element={<Boards />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
