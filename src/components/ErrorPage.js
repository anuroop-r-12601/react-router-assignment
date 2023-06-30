import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container'>
        <h1>Oops...Page Not Found</h1>
        <Link to='/' className='btn'>Return to HomePage</Link>
    </div>
  )
}

export default ErrorPage