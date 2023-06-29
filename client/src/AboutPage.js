import React from "react";
import ptPic6 from './ptPic6.gif'; 
import ptPic7 from './ptPic7.gif'; 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutPage(){

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Container fluid="sm" style={{ color: "white", width: "65%", textAlign: "center",   backgroundColor: "#212529",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
        <br/>
      
        <h1><u>About Us</u></h1>

        <Image src={ptPic6} alt="ptPic6" roundedCircle fluid="true"/> 
        <br/>
        <br/>
        <h2 style={{ overflow: "break-word", padding: "5px"}}>
        Optimized schedule along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist of inspirational emails, workouts, store recommendations.
        </h2>

        <br/>

      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <Container className="d-flex justify-content-center" style={{ color: "white", width: "40%", height: "30%", textAlign: "center",  backgroundColor: "#212529",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", padding: "20px"}}>
        
        <Row >
          <Col>  
          <br/>
          <h2>Everyday: 9am-5pm <br/> <br/> Treatment session: 1hr</h2>
      
            <Image src={ptPic7} alt="ptPic7" style={{ borderRadius: "200px", marginTop: "20px"}} roundedCircle fluid="true"/> 
          </Col>
        </Row>

      </Container>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <Container fluid="sm" className="aboutPage0" style={{ textAlign: "center", justifyContent: "space-around", color: "#7395B6"}}>

        <Row>
          <Col> 
            <h3><b><u>Orthopedic Conditions Treated -</u></b></h3>
            <br/>
            <br/>
            <h5>
              <ul>
                <li>abductors</li>
                <li>abs</li>
                <li>adductors</li>
                <li>biceps</li>
                <li>calves</li>
                <li>cardiovascular system</li>
                <li>delts</li>
                <li>forearms</li>
                <li>glutes</li>
                <li>hamstrings</li>
                <li>lats</li>
                <li>levator scapulae</li>
                <li>pectorals</li>
                <li>quads</li>
                <li>serratus anterior</li>
                <li>spine</li>
                <li>traps</li>
                <li>triceps</li>
              </ul>
            </h5>
          </Col>
        </Row>
      </Container>

    </>
  );
}
export default AboutPage;