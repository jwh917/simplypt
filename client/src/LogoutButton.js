import React from "react";
import { useDispatch } from "react-redux";
import { userLogout} from "./userSlice";


function LogoutButton() {
  
  const dispatch = useDispatch();

  function handleLogoutClick() {
    dispatch(userLogout());
  }

  return (
    <button onClick={handleLogoutClick}>
      Logout
    </button>
  );
}


export default LogoutButton;
