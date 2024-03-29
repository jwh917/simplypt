import React, {useEffect, useState} from "react";
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

const activeLinkStyles = {
  color: "white"
};



function NavBar({itemsCountRefresher}) {

  const user = useSelector(selectUser);

  const [myCart, setMyCart] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/myCart")
      .then((r) => r.json())
      .then((myCartData) => setMyCart(myCartData));
  }, [itemsCountRefresher]);


  return (

    <Navbar collapseOnSelect expand="lg" className="navStyle">
      <Container>
        <Navbar.Brand>
          <Link to="/"> <Image src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" rounded /> </Link>
          <br/>
          <h1 style={{color: "black"}}>Simply PT</h1>
          {user ? <LogoutButton user={user}/> :  <Link to="/signin">
            <Button className="btn btn-secondary" >
              Log  in <i className="bi bi-person-fill"></i>
            </Button>
        </Link>
        
          }
          <br/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="navBar">
          <NavLink
            to="/"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            Home <i className="bi bi-house" ></i>
          </NavLink>

          <NavLink
            to="/about"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            About<i className="bi bi-file-earmark-text"></i>
          </NavLink>  


          <NavLink
            to="/signin"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            {user ? "Profile - Appts" : "Sign In - Up"} <i className="bi bi-people"></i>
          </NavLink> 


          <NavLink
            to="/store/home"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            Store <i className="bi bi-shop"></i>
          </NavLink>

          <NavLink
            to="/store/search"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            Search <i className="bi bi-search"></i>
          </NavLink>


          <NavLink
            to="/store/cart"
            exact
            className="navLink"
            style={linkStyles}
            activeStyle={activeLinkStyles}
          >
            MyCart {myCart.length <= 0 ? <i className="bi bi-cart4"></i>     :  <i className="bi bi-cart4"><span className="badge">{myCart.length}</span></i>}  
          </NavLink>
      

        </Nav>
    
        </Navbar.Collapse>

        <br/>
      </Container>
    </Navbar>
  );
}

export default NavBar;

