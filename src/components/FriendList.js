import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux-components/actions";

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

function FriendList({data,requestUsers}) {
  const [users, setUsers] = useState(data);
useEffect(()=>{
  requestUsers();
  setUsers(data);
  console.log("updated",data)
},[JSON.stringify(data)])

  return (
    <div>
      <div className="container">
      <h1>My Friends</h1>
      {console.log("users",users)}
      {users.length>0 && users
        .filter((user) => user.id != 1)
        .map((user) => {
          return (
              <div className="userBar" key={user.id}>
                <img src={user.image} className="listPic" />
                <h3>{user.name}</h3>
                <Link
                  to={`${user.id}`}
                  className="btn"
                  style={{ "margin-left": "auto" }}
                >
                  View Profile
                </Link>
              </div>
          );
        })}
        </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList);
