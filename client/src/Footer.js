import React from "react"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



const Footer = ({user}) => 
<footer className="page-footer font-small blue pt-4" style={{width: "100%", backgroundColor: "#212529", color: "black", borderTop: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", letterSpacing: "0.5px"}}> 
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <a href="/"> <Image src="https://icon-library.com/images/physical-therapy-icon/physical-therapy-icon-22.jpg" alt="ptPic9" rounded style={{width: "50px", height: "50px"}}/> </a>
        
        <br/>

        <h4 style={{color: "black"}}>Simply PT</h4>
        <p>Committed to excellence in care. Discover Your Potential!</p>
        <p>1000 SimplyPT Ave. New York, NY 10001</p>
        <p>simplypt2023@gmail.com</p>
        <p>(718) 123-4567</p>
        
        <br/>

        <form className="form-footer my-0">
          <h5>Newsletter - Subscribe Today!</h5>
          <input type="text"  placeholder="Email.." name="search" style={{borderRadius: "16px 0 0 16px", height: "54px", padding: "5px"}}/>
          <button style={{border: "2px solid black", borderRadius: "0 16px 16px 0", width: "50px", height: "55px", backgroundColor: "#212529"}}> <i className="bi bi-send-fill"></i> </button>
        </form>

        <br/>
        
      </div>
        
      <hr className="clearfix w-100 d-md-none pb-0"/>
        
      <div className="col-md-3 mb-md-0 mb-3" style={{marginTop: "55px", fontSize: "25px"}}>
        <ul className="list-unstyled">
          <li style={{marginBottom: "15px"}}><a href="#!">Home</a></li>
          <li style={{marginBottom: "15px"}}><a href="#!">About</a></li>
          <li style={{marginBottom: "15px"}}><a href="#!">{user ? "Profile - Appts" : "Sign In - Up"}</a></li>
          <li style={{marginBottom: "15px"}}><a href="#!">Store</a></li>
          <li style={{marginBottom: "15px"}}><a href="#!">Search</a></li>
          <li style={{marginBottom: "15px"}}><a href="#!">MyCart</a></li>
            
        </ul>
      </div>
        
      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled" style={{marginTop: "85px", fontSize: "25px"}}>
          <li>
            <a href="#!">
              <Button size="sm" style={{backgroundColor: "#212529", border: "2px black solid", borderRadius: "15px", color: "black", width: "30%", height: "55px", fontSize: "55%"}}>
                More Info 
              </Button>
            </a>
          </li>

          <br/>
          <br/>
            
          <li>
            <a href="#!">
              <Button size="sm" style={{backgroundColor: "#212529", border: "2px black solid", borderRadius: "15px", color: "black", width: "30%", height: "55px", fontSize: "55%"}}>
                Contact Us
              </Button>
            </a>
          </li>
          <br/>
        </ul>
      </div>
    </div>
  </div>
    

  <hr/>

  <br/>



  <div style={{display: "flex", textAlign: "center", justifyContent: "space-evenly", fontSize: "25px"}}>

    <i className="bi bi-facebook" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>

    <i className="bi bi-instagram" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>

    <i className="bi bi-twitter" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>

    <i className="bi bi-google" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>

    <i className="bi bi-github" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>

    <i className="bi bi-linkedin" style={{border: "2px solid black", borderRadius: "10%", padding: "5px"}}></i>
    

  </div>

  <br/>


  <div className="footer-copyright text-center py-3"> 
    <a href="/">Simply PT</a> 2023 ©
  </div>

</footer>


export default Footer