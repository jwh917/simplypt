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

      <div>
        <h4>Welcome {user.username},({user.name})</h4>

        <button className="btn btn-secondary" onClick={handleLogoutClick} style={{color: "black"}}>
          Logout
        </button>
      </div>

    </>

  );
}


export default LogoutButton;
