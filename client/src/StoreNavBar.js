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

function StoreNavBar() {

  return (

        <div>            
            <NavLink
            to="/store/home"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              Store Front
            </NavLink>

            <NavLink
            to="/store/search"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              Search
            </NavLink>

            <NavLink
            to="/store/cart"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkgrey",
            }}
            >
              Cart
            </NavLink>

        </div>

    
  );
}


export default StoreNavBar;