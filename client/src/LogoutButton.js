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

    <>

      <h4 style={{color: "black"}}>

        Welcome {user.username} <br/>
        
        ({user.name}) &nbsp;

        

        <Image src={user.image} alt="UserPic" roundedCircle fluid="true" style={{width: "15%", height: "15%"}}/>
      
      </h4>

      <button className="btn btn-secondary" onClick={handleLogoutClick} style={{color: "black", border: "1px black solid"}}>
        Logout
      </button>

      <br/>

    </>

  );
}


export default LogoutButton;
