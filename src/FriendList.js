import React, { useState } from "react";
import { data } from "./users";
import { Link } from "react-router-dom";
function FriendList() {
  const [users, setUsers] = useState(data);
  return (
    <div>
      <div className="container">
      <h1>My Friends</h1>
      {users
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

export default FriendList;
