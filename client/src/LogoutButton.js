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
      Welcome {user.username},({user.name})
      <br/>

      
      <button class="btn btn-secondary" onClick={handleLogoutClick} style={{color: "black"}}>
        Logout
      </button>
    </>

  );
}


export default LogoutButton;
