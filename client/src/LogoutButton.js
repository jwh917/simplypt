import React from "react";
import { useDispatch } from "react-redux";
import { userLogout} from "./userSlice";


function LogoutButton({user}) {
  
  const dispatch = useDispatch();

  function handleLogoutClick() {
    dispatch(userLogout());
  }

  return (

    <>

      <h4 style={{color: "black"}}>Welcome {user.username},({user.name})</h4>

      <button className="btn btn-secondary" onClick={handleLogoutClick} style={{color: "black", border: "1px black solid"}}>
        Logout
      </button>

      <br/>

    </>

  );
}


export default LogoutButton;
