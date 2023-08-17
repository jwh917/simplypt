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
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';




function AboutPage({pts}){


  const showPTs = pts.map((pt) => (
    <Carousel.Item key={pt.id}>
      <Card className="mx-auto" id="aboutPageCard">
      <br/>
      <Card.Img className="mx-auto" id="aboutPageCardImg" variant="top" src={pt.image} alt="pt" />
      <Card.Body>
        <Card.Title>
          <u>Name</u>: {pt.name}
          <br/>
          <u>Email</u>: {pt.email}
        </Card.Title>
      </Card.Body>
      </Card>
      <br/>
    </Carousel.Item>
  ))



  return (
    <>
      <br/>
      <br/>
      <br/>
      <Container className="aboutPageContainer0" fluid="sm">
        <br/>
      
        <h1><u>About Us</u></h1>

        <Image src={ptPic1} alt="ptPic1" roundedCircle fluid="true"/> 
        <br/>
        <br/>
        <h2>
        Optimized scheduling along with allowing patients\therapist to view their appointments and therapist can communicate various information that consist workouts and store recommendations.
        </h2>

        <br/>

      </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <Container className="d-flex justify-content-center" id="aboutPageContainer1">
        
        <Row >
          <Col>  
          <br/>
          <h2>Everyday: 9am-5pm <br/> <br/> Treatment session: 1hr</h2>
      
            <Image src={ptPic7} alt="ptPic7" roundedCircle fluid="true"/> 
          </Col>
        </Row>

      </Container>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <h2 className="aboutMeetTeamHeader">Meet The Team</h2>
      <br/>
      <Carousel className="mx-auto" id="aboutPtCarousel">
        {showPTs}
      </Carousel>

      <br/>
      <br/>
      <br/>
      <br/>


      <Container fluid="sm" className="aboutPage0">

        <Row>
          <Col> 
            <h3><b><u> Orthopedic Conditions Treated </u></b></h3>
            <br/>
            <br/>

            <HorizontalScroll reverseScroll={false} className="aboutTreated">
                <div> <Image src={abduc} alt="abduc" roundedCircle fluid="true"/> <br/> <br/> abductors </div>
                <div> <Image src={abs} alt="abs" roundedCircle fluid="true" /> <br/> <br/> abs</div>
                <div> <Image src={adduc} alt="adduc" roundedCircle fluid="true" /> <br/> <br/> adductors </div>
                <div> <Image src={biceps} alt="biceps" roundedCircle fluid="true" /> <br/> <br/> biceps</div>
                <div> <Image src={calf} alt="calf" roundedCircle fluid="true" /> <br/> <br/> calves  </div>
                <div> <Image src={deltoid} alt="deltoid" roundedCircle fluid="true" /> <br/> <br/> delts</div>
                <div> <Image src={forearm} alt="forearm" roundedCircle fluid="true" /> <br/> <br/> forearms </div>
                <div> <Image src={glut} alt="glut" roundedCircle fluid="true" /> <br/> <br/> glutes</div>
                <div> <Image src={hammy} alt="hammy" roundedCircle fluid="true" /> <br/> <br/> hamstrings </div>
                <div> <Image src={lats} alt="lats" roundedCircle fluid="true" /> <br/> <br/> lats</div>
                <div> <Image src={levator} alt="levator" roundedCircle fluid="true" /> l<br/> <br/> evator scapulae </div>
                <div> <Image src={pect} alt="pect" roundedCircle fluid="true" /> <br/> <br/> pectorals </div>
                <div> <Image src={quads} alt="quads" roundedCircle fluid="true" /> <br/> <br/> quads </div>
                <div> <Image src={traps} alt="traps" roundedCircle fluid="true" /> <br/> <br/> traps</div>
                <div> <Image src={triceps} alt="triceps" roundedCircle fluid="true" /> <br/> <br/> triceps  </div>
            </HorizontalScroll>

     
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
    </>
  );
}
export default AboutPage;