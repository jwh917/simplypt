import React from "react";
import { useDispatch } from "react-redux";
import { userLogout} from "./userSlice";
import Image from 'react-bootstrap/Image';


function LogoutButton({user}) {
  
  const dispatch = useDispatch();

  function handleLogoutClick() {
    dispatch(userLogout());
  }

  return (

    <div className="logoutButton">

      <h4>

        Welcome {user.username} <br/>
        
        ({user.name}) &nbsp;

        <Image src={user.image} alt="UserPic" roundedCircle fluid="true"/>
      
      </h4>

      <button className="btn btn-secondary" onClick={handleLogoutClick}>
        Logout
      </button>

      <br/>

    </div>

  );
}


export default LogoutButton;
