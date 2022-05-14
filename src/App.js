import './App.css';
// import Board from './components/Layout/Board';
import NavBar from './components/Layout/NavBar';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import Boards from './views/Boards';
import Profile from './views/Profile';
import Welcome from './views/Welcome';
import CurrentBoard from './views/CurrentBoard';
import AuthPage from './components/Login/AuthPage';

import { AuthContext } from './context/auth-provider';

function App() {
  return (
    <div className='App'>
      <AuthContext.Provider value={{ url: '', code: '' }}>
        <NavBar />
        <Routes>
          <Route path='/board' element={<CurrentBoard />} />
          <Route path='/home' element={<Welcome />} />
          <Route path='/login/' element={<Login />}></Route>
          <Route path='/boards' element={<Boards />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/api/forge/callback/oauth' element={<AuthPage />} />
          <Route path='/api/forge/auth' element={<AuthPage />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
