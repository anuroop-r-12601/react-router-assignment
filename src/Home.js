import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

function Home() {
  return (
    <div className='container'>
        <Profile />
        <Link to='/friendList' className='btn'>Show Friends</Link>
    </div>
  )
}

export default Home