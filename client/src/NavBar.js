import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import LogoutButton from "./LogoutButton";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const linkStyles = {
  color: "black"
};



function NavBar() {

  const user = useSelector(selectUser);

  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navStyle">
    <Container>
      <Navbar.Brand href="/">
        <Image src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" rounded />
        <br/>
        <h1 style={{color: "black"}}>Simply PT</h1>
        {user ? <LogoutButton user={user}/> : "" }
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
          <Nav.Link href="/">
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
          </Nav.Link>

          <Nav.Link href="/about">
            <NavLink
              to="/about"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
            >
              About <i class="bi bi-file-earmark-text"></i>
            </NavLink>  
          </Nav.Link>


          <Nav.Link href="/signin">
            <NavLink
            to="/signin"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={{
              color: "white"
            }}
            >
            {user ? "Profile - Appts" : "Sign In - Up"} <i class="bi bi-people"></i>
            </NavLink> 
          </Nav.Link>


          <Nav.Link href="/store/home">
            <NavLink
              to="/store/home"
              exact
              className="navLink"
              style={linkStyles}
              activeStyle={{
                color: "white"
              }}
              >
              Store <i class="bi bi-shop"></i>
            </NavLink>
          </Nav.Link> 

          <Nav.Link href="/store/search">
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
          </Nav.Link>


          <Nav.Link href="/store/cart">
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
          </Nav.Link>
     

        </Nav>
        <Button type="button" className="btn btn-secondary" style={{marginLeft: "20px", border: "1px black solid"}}><i className="bi bi-moon-fill"></i></Button>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;

