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
  color: "white",
};



function NavBar() {

  const user = useSelector(selectUser);


  return (
    <div>
      
      <h1>Simply PT</h1>

      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgrey",
        }}
        >
        Home
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgrey",
        }}
      >
        About
      </NavLink>

      <NavLink
        to="/signin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgrey",
        }}
      >
        New Patient <br/> - <br/> Sign In
      </NavLink>

      <NavLink
        to="/store/home"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightgrey",
        }}
      >
        Store
      </NavLink>


      {user ? <LogoutButton /> : "" }
    </div>
  );
}

export default NavBar;