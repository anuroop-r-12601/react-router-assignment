import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import { getUser } from '../redux-components/actions'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  return {
    data : state.users,
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    requestUsers : ()=>dispatch(getUser()),
  }
}
function Home({data,requestUsers}) {
  const [users, setUsers] = useState(undefined);

  useEffect(()=>{
    requestUsers();
    setUsers(data);
    console.log("updated",data)
  },[JSON.stringify(data)])

  return (
    <div className='container'>
        <Profile />
        <Link to='/friendList' className='btn'>Show Friends</Link>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);