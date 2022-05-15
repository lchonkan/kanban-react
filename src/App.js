import './App.css';
import React, { useState } from 'react';
// import Board from './components/Layout/Board';
import NavBar from './components/Layout/NavBar';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import Boards from './views/Boards';
import Profile from './views/Profile';
import Welcome from './views/Welcome';
import CurrentBoard from './views/CurrentBoard';
import AuthPage from './components/Login/AuthPage';

import ForgeViewer from './views/ForgeViewer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/board' element={<CurrentBoard />} />
        <Route path='/home' element={<Welcome />} />
        <Route path='/login/' element={<Login />}></Route>
        <Route path='/boards' element={<Boards />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/api/forge/callback/oauth' element={<AuthPage />} />
        <Route path='/api/forge/auth' element={<AuthPage />} />
        <Route path='/forge/viewer' element={<ForgeViewer />} />
      </Routes>
    </div>
  );
}

export default App;
