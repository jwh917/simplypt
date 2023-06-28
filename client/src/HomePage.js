import React from "react";
import ptPic1 from './ptPic1.gif'; 
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
      <br/>
      <br/>
      <br/>
      <br/>

      <Container fluid="sm" style={{ width: "65%", textAlign: "center",   backgroundColor: "darkgray",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>

        <Image src={ptPic1} alt="ptPic1" roundedCircle fluid="true"/> 
        <h2 style={{ overflow: "break-word", padding: "5px"}}>
            Our office is proud to offer
            state-of-the-art, compassionate care. By sharing
            knowledge and investing in research, we
            empower our therapists in advancing the field
            and improving patient quality of life.
        </h2>

      </Container>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      

      <Container style={{ width: "85%", height: "30%", textAlign: "center",  backgroundColor: "darkgray",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", padding: "20px"}}>
        <Row>
          <Col>        
            <Image src={ptPic2} alt="ptPic2" roundedCircle fluid="true" style={{marginTop: "35px"}}/> 
          </Col>
        </Row>

        <Row>
          <Col> 
            <h3 className="display-6" style={{fontSize: "85%", marginTop: "50px"}}><u>What you can expect at your appointment:</u></h3>
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
      <br/>
      <br/>
      <br/>


      <Container fluid="sm" style={{ textAlign: "center"}}>
        <Image src={ptPic4} alt="ptPic4" thumbnail fluid="true" style={{border: "2px solid rgba(255,255,255,0.1)"}}/> 
      </Container>
  
    </>
  );
}
export default HomePage;