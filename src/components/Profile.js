import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../redux-components/actions";

const mapStateToProps = (state) => {return {
    data:state.users,
    loading: state.loading
}};
const mapDispatchToProps = dispatch =>{
  return {
    requestUsers : ()=>dispatch(getUser()),
  }
}

function Profile({data,loading,requestUsers}) {
  const { id = 1 } = useParams();
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(data)
    if(!data){
      requestUsers();
    }
    else{

      const userData = Array.from(data).find((user) => {
        return user.id === parseInt(id)});
        console.log(userData);
        if (userData) setUser(userData);
        else {
          id != 1 && navigate("/error", {});
        }
      }
  }, [JSON.stringify(data)]);
  return (<>
      {loading ? <h1>Loading</h1>: user &&
      <div className="profile">
      <img src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' className="profPic" /> 
      <div className="profile-box">
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
        <h3>{user.company.name}</h3>
        <h3>{user.email}</h3>
      </div>
    </div>
      }
      </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
