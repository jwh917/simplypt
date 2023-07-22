import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import LogoutButton from "./LogoutButton";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';



const linkStyles = {
  color: "black"
};



function NavBar() {

  const user = useSelector(selectUser);

  return (

    <Navbar collapseOnSelect expand="lg" className="navStyle" style={{backgroundColor: "#212529"}}>
    <Container>
      <Navbar.Brand>
        <Link to="/"> <Image src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" rounded /> </Link>
        <br/>
        <h1 style={{color: "black"}}>Simply PT</h1>
        {user ? <LogoutButton user={user}/> :  <Link to="/signin">
          <Button className="btn btn-secondary" style={{color: "black", border: "1px black solid"}}>
            Log  in <i className="bi bi-person-fill"></i>
          </Button>
      </Link>
      
        }
        <br/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav style={{gap: "25px"}}>
            <NavLink
              to="/"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
              >
              Home <i className="bi bi-house" ></i>
            </NavLink>

            <NavLink
              to="/about"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
            >
              About <i className="bi bi-file-earmark-text"></i>
            </NavLink>  


            <NavLink
            to="/signin"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={{
              color: "white"
            }}
            >
            {user ? "Profile - Appts" : "Sign In - Up"} <i className="bi bi-people"></i>
            </NavLink> 


            <NavLink
              to="/store/home"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
              >
              Store <i className="bi bi-shop"></i>
            </NavLink>

            <NavLink
              to="/store/search"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
              >
              Search <i className="bi bi-search"></i>
            </NavLink>


            <NavLink
              to="/store/cart"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
              >
              MyCart <i className="bi bi-cart4"></i> 
            </NavLink>
     

        </Nav>
  
      </Navbar.Collapse>

      <br/>
    </Container>
  </Navbar>
  );
}

export default NavBar;

