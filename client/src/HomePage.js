import React from "react";
import ptPic2 from './ptPic2.gif'; 
import ptPic3 from './ptPic3.gif'; 
import ptPic4 from './ptPic4.jpg'; 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HomePage(){
  return (
    <>
      <div className="page-header">
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="page-caption">
                  </div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="card-section">
        <div className="container">
          <div className="card-block" style={{backgroundColor: "#212529", borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
            <div className="section-title mb-0" style={{backgroundColor: "#212529", color: "white"}}>
              <h3>
                Our office is proud to offer
                state-of-the-art, compassionate care. By sharing
                knowledge and investing in research, we
                empower our therapists in advancing the field
                and improving patient quality of life.
              </h3>
            </div>
          </div>

          
        </div>

        <br/>
        <br/>
        <br/>
        <br/>

        <div className="col-md-6 offset-md-5" style={{backgroundColor: "#212529", borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", padding: "30px"}}>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/BNsoZiP3YZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{ borderRadius: "70px", width: "100%"}}></iframe>

        </div>
      </div>

    
     
      <Container style={{ color: "white", width: "100%", height: "30%", textAlign: "center",  backgroundColor: "#212529",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", padding: "20px", marginTop: "-150px"}}>
        <Row>
          <Col>        
            <Image src={ptPic2} alt="ptPic2" roundedCircle fluid="true" style={{marginTop: "35px"}}/> 
          </Col>
        </Row>

        <Row>
          <Col> 
            <h3 className="display-6" style={{fontSize: "95%", marginTop: "50px"}}><u>What you can expect at your appointment:</u></h3>
            <br/>
            <h3 className="display-4">
            <ul style={{fontSize: "30%"}}>
              <li>Dedication to compassionate</li>
              <li>Comprehensive care and outcomes</li>
              <li>Highly qualified clinicians</li>
              <li>Cutting-edge equipment and facilities</li>
              <li>Access to the latest medical procedures and treatments</li>
              <li>Friendly, welcoming staff</li>
              <li>A relaxed, professional atmosphere</li>
              <br/>
              <li>To Learn More Visit Our <a href="/about">About</a> Page</li>
            </ul>
            </h3>
          </Col>
        </Row>

        <Row>
          <Col>        
            <Image src={ptPic3} alt="ptPic3" roundedCircle fluid="true"  style={{marginTop: "35px"}}/> 
          </Col>
        </Row>
      </Container>
       
      <br/>
      <br/>
      <br/>
      <br/>
  


      <Container fluid="sm" style={{ textAlign: "center"}}>
        <Image src={ptPic4} alt="ptPic4" thumbnail fluid="true" style={{border: "2px solid rgba(255,255,255,0.1)"}}/> 
      </Container>

      {/* store promo */}

      <br/>
      <br/>
      <br/>
  
    </>
  );
}
export default HomePage;