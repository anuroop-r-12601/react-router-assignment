import React from 'react'
import {Routes,Route, BrowserRouter } from 'react-router-dom'

import Profile from './Profile';
import ErrorPage from './ErrorPage';
import FriendList from './FriendList';

import './App.css';
import Home from './Home';

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
