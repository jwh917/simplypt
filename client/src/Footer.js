import React from "react"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';



const Footer = ({user}) => 
<footer className="page-footer font-small blue pt-4" id="footer"> 
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <Link to="/"> <Image src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" rounded /> </Link>
        
        <br/>

        <h4>Simply PT</h4>
        <p>Committed to excellence in care. Discover Your Potential!</p>
        <p>1000 SimplyPT Ave. New York, NY 10001</p>
        <p>simplypt2023@gmail.com</p>
        <p>(718) 123-4567</p>
        
        <br/>

        <form className="form-footer my-0" id="footerForm">
          <h5>Newsletter - Subscribe Today!</h5>
          <input type="text"  placeholder="Email.." name="search" />
          <button className="buttonEffect" > <i className="bi bi-send-fill"></i> </button>
        </form>

        <br/>
        
      </div>
        
      <hr className="clearfix w-100 d-md-none pb-0"/>
        
      <div className="col-md-3 mb-md-0 mb-3" id="footerLinks">
        <ul className="list-unstyled">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/signin">{user ? "Profile - Appts" : "Sign In - Up"}</a></li>
          <li><a href="/store/home">Store</a></li>
          <li><a href="/store/search">Search</a></li>
          <li><a href="/store/cart">MyCart</a></li>
            
        </ul>
      </div>
        
      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled" id="footerButtons">
          <li>
            <Button className="buttonEffect" size="sm">
              More Info 
            </Button>
          </li>

          <br/>
          <br/>
          <li>
            <Button className="buttonEffect" size="sm">
              Contact Us
            </Button>
          </li>
          <br/>
        </ul>
      </div>
    </div>
  </div>
    

  <hr/>

  <br/>



  <div className="footerSocial">

    <i className="bi bi-facebook"></i>

    <i className="bi bi-instagram"></i>

    <i className="bi bi-twitter"></i>

    <i className="bi bi-google"></i>

    <i className="bi bi-github"></i>

    <i className="bi bi-linkedin"></i>

  </div>

  <br/>


  <div className="footer-copyright text-center py-3"> 
    <a href="/">Simply PT</a> 2023 ©
  </div>

</footer>


export default Footer