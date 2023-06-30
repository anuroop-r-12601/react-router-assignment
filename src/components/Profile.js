import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {data} from '../users'
function Profile() {
    const {id=1} = useParams();
    const [user,setUser]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        const userData=data.find((user)=>user.id === parseInt(id));
        console.log(userData)
        if(userData)
            setUser(userData);
        else{
            (id!=1 && navigate("/error",{}))
        }
    },[])

    return (
    <div className='profile'>
        <img src={user.image} className='profPic'/>
        <div className='profile-box'>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.company}</h3>
            <h3>{user.email}</h3>
        </div>
    </div>
        )
}

export default Profile