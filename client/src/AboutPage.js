import React from "react";
import ptPic1 from './ptPic1.gif'; 
import ptPic7 from './ptPic7.gif'; 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import abduc from './abduc.jpeg'; 
import abs from './abs.jpeg'; 
import adduc from './adduc.jpeg'; 
import biceps from './biceps.jpeg'; 
import calf from './calf.jpeg'; 
import deltoid from './deltoid.jpeg'; 
import forearm from './forearm.jpeg'; 
import glut from './glut.jpeg'; 
import hammy from './hammy.jpeg'; 
import lats from './lats.jpeg'; 
import levator from './levator.jpeg'; 
import pect from './pect.jpeg'; 
import quads from './quads.jpeg'; 
import traps from './traps.jpeg'; 
import triceps from './triceps.jpeg'; 

import HorizontalScroll from 'react-horizontal-scrolling'



function AboutPage(){

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Container fluid="sm" style={{ color: "white", width: "65%", textAlign: "center",   backgroundColor: "#212529",   borderRadius: "90px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
        <br/>
      
        <h1><u>About Us</u></h1>

        <Image src={ptPic1} alt="ptPic1" roundedCircle fluid="true"/> 
        <br/>
        <br/>
        <h2 style={{ overflow: "break-word", padding: "5px"}}>
        Optimized scheduling along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist workouts and store recommendations.
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
      {/* MEET THE TEAM */}
      <br/>
      <br/>
      <br/>


      <Container fluid="sm" className="aboutPage0" style={{ textAlign: "center", justifyContent: "space-around", color: "#7395B6"}}>

        <Row>
          <Col> 
            <h3><b><u> Orthopedic Conditions Treated </u></b></h3>
            <br/>
            <br/>

            <HorizontalScroll reverseScroll={false}>
                <div> <Image src={abduc} alt="abduc" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> abductors </div>
                <div> <Image src={abs} alt="abs" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> abs</div>
                <div> <Image src={adduc} alt="adduc" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> adductors </div>
                <div> <Image src={biceps} alt="biceps" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> biceps</div>
                <div> <Image src={calf} alt="calf" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> calves  </div>
                <div> <Image src={deltoid} alt="deltoid" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> delts</div>
                <div> <Image src={forearm} alt="forearm" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> forearms </div>
                <div> <Image src={glut} alt="glut" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> glutes</div>
                <div> <Image src={hammy} alt="hammy" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> hamstrings </div>
                <div> <Image src={lats} alt="lats" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> lats</div>
                <div> <Image src={levator} alt="levator" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> l<br/> <br/> evator scapulae </div>
                <div> <Image src={pect} alt="pect" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> pectorals </div>
                <div> <Image src={quads} alt="quads" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> quads </div>
                <div> <Image src={traps} alt="traps" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> traps</div>
                <div> <Image src={triceps} alt="triceps" roundedCircle fluid="true" style={{width: "100px", height: "100px"}}/> <br/> <br/> triceps  </div>
            </HorizontalScroll>

     
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutPage;