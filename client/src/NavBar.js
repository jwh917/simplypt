import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import LogoutButton from "./LogoutButton";


const linkStyles = {
  display: "inline-block",
  width: "90px",
  textAlign: "center",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  borderRadius: "20px"
};



function NavBar() {

  const user = useSelector(selectUser);
  console.log(user)

  return (
    <div id="navBar">

      <h1>Simply PT</h1>
      {user ? <LogoutButton user={user}/> : "" }


      <ul className="nav justify-content-end" id="navBarUl">

        <li className="nav-item">

           <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
              background: "lightgrey",
            }}
            >
            
            <button class="btn btn-secondary" style={{color: "black"}}> Home </button>  
          </NavLink>

        </li>
        <li className="nav-item">

        <NavLink
            to="/about"
            exact
            style={linkStyles}
            activeStyle={{
              background: "lightgrey",
            }}
          >
            
            <button class="btn btn-secondary" style={{color: "black"}}> About </button>  
          </NavLink>        
        </li>
        <li className="nav-item">

        <NavLink
          to="/signin"
          exact
          style={linkStyles}
          activeStyle={{
            background: "lightgrey",
          }}
        >
        <button class="btn btn-secondary" style={{color: "black"}}> Sign In/Up </button>  
        </NavLink>       
        </li>


        <li className="nav-item">
          <NavLink
          to="/store/home"
          exact
          style={linkStyles}
          activeStyle={{
            background: "lightgrey",
          }}
        >
          <button class="btn btn-secondary" style={{color: "black"}}> Store </button>
        </NavLink>
        </li>

      </ul>

      {/* <hr/> */}
    </div>
  );
}

export default NavBar;