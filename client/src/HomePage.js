import React, {useEffect} from "react";
import ptPic2 from './ptPic2.gif'; 
import ptPic3 from './ptPic3.gif'; 
import ptPic4 from './ptPic4.jpg'; 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';




function HomePage(){
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          <div className="card-block">
            <div className="section-title mb-0" id="homePageHeader">
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

        <div className="col-md-6 offset-md-5" id="homePageVideo">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/BNsoZiP3YZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
        </div>
      </div>

    
     
      <Container className="homePageContainer0">
        <Row>
          <Col>        
            <Image src={ptPic2} alt="ptPic2" roundedCircle fluid="true" /> 
          </Col>
        </Row>

        <Row>
          <Col> 
            <h3 className="display-6" id="homePageContainer0H3"><u>What you can expect at your appointment:</u></h3>
            <br/>
            <h3 className="display-4">
            <ul className="homePageContainer0Ul">
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
            <Image src={ptPic3} alt="ptPic3" roundedCircle fluid="true" /> 
          </Col>
        </Row>
      </Container>
       
      <br/>
      <br/>
      <br/>
      <br/>
  


      <Container fluid="sm" className="homePageContainer1">
        <Image src={ptPic4} alt="ptPic4" thumbnail fluid="true" /> 
      </Container>

      <div className="row mx-auto" id="storePromoDiv0s">
        <div className="col-md-6"> <Image src="https://pilatesmatters.com/cdn/shop/files/Merrithew_PilatesRehabAccessoryBundle_1024x1024.jpg" alt="ptPic4" thumbnail fluid="true" id="storePromoDivImg0"/> </div>
        <div className="col-md-6" id="storePromoDiv1">
          <Image src="https://www.protherapysupplies.com/pts_website_assets/images/pts_logo.png" alt="ptPic4" thumbnail fluid="true" id="storePromoDivImg1"/>
          <br/>
          <br/>
          <h1>Shop Certified Therapy Equipment </h1>
          <h3>Deal of The Day - All Items 30%!</h3>
          <h4>Use promo code: SimplyPT30</h4>
          <br/>
          
          <Link to="/store/home">
            <Button className="btn btn-secondary">
              Shop Now
            </Button>
          </Link>
                    
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
  
    </>
  );
}
export default HomePage;