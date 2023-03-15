import React from "react";
import ptPic1 from './ptPic1.gif'; 
import ptPic2 from './ptPic2.gif'; 
import ptPic3 from './ptPic3.gif'; 
import ptPic4 from './ptPic4.jpg'; 

function HomePage(){
  return (
    <>
      <img src={ptPic1} alt="ptPic1" />

      <h3>
        Our office are proud to offer
        state-of-the-art, compassionate care. By sharing
        knowledge and investing in research, we
        empower our therapists in advancing the field
        and improving patient quality of life.
      </h3>

      <img src={ptPic2} alt="ptPic2" />
      <img src={ptPic3} alt="ptPic3" />

      <h3>What you can expect at your appointment:</h3>
      <h3>
        <ul>
          <li>Dedication to compassionate</li>
          <li>Comprehensive care and outcomes</li>
          <li>Highly qualified clinicians</li>
          <li>Cutting-edge equipment and facilities</li>
          <li>Access to the latest medical procedures and treatments</li>
          <li>Friendly, welcoming staff</li>
          <li>A relaxed, professional atmosphere</li>
        </ul>
      </h3>
      
      <br/>

      <img style={{height:"600px", width:"600px"}} src={ptPic4} alt="ptPic4" />


    </>
  );
}
export default HomePage;