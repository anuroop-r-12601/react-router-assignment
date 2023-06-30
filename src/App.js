import React from 'react'
import {Routes,Route, BrowserRouter } from 'react-router-dom'

import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import FriendList from './components/FriendList';

import './App.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/1' element={<Home/>} />
        <Route path='/friendList'>
          <Route index element={<FriendList/>} />
          <Route path=':id' element={<Profile/>} />
        </Route> 
        <Route path='*' element={<ErrorPage/>} />     
      </Routes>
    </BrowserRouter>
    );
}

export default App;
