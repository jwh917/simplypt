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

  return (
    <div id="navBar">

      <div style={{marginTop: "-30px", border: "5px solid black", width: "200px", textAlign: "center"}}>

        <img src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" style={{height: "150px", width: "150px"}}/>

        <h1>Simply PT</h1>

      </div>

      <br/>

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
            
            <button className="btn btn-secondary" style={{color: "black"}}> Home </button>  
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
            
            <button className="btn btn-secondary" style={{color: "black"}}> About </button>  
          </NavLink>        
        </li>
        <li className="nav-item">

        <NavLink
          to="/signin"
          exact
          style={{
            display: "inline-block",
            width: "110px",
            textAlign: "center",
            padding: "12px",
            margin: "0 6px 6px",
            background: "grey",
            textDecoration: "none",
            borderRadius: "20px"
          }}
          activeStyle={{
            background: "lightgrey",
          }}
        >
        <button className="btn btn-secondary" style={{color: "black"}}> {user ? "Profile - Appts" : "Sign In/Up" } </button>  
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
          <button className="btn btn-secondary" style={{color: "black"}}> Store </button>
        </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default NavBar;