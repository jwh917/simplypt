import React from "react";
import { NavLink } from "react-router-dom";



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

        {/* if user is logged in */}
      {/* <LogoutButton setUser={setUser}/> */}
    </div>
  );
}

export default NavBar;