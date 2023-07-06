import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import ItemCard from "./ItemCard";
import ItemPopUp from "./ItemPopUp";

import Row from 'react-bootstrap/Row';


function StoreHomePage(){

  const [braces, setBraces] = useState([])
  const [exercise, setExercise] = useState([])
  const [rollers, setRollers] = useState([])
  const [hotncold, setHotnCold] = useState([])

  useEffect(() => {

    fetch("http://localhost:4000/braces")
      .then((r) => r.json())
      .then((data) => setBraces(data));
    fetch("http://localhost:4000/exercise")
      .then((r) => r.json())
      .then((data) => setExercise(data));
    fetch("http://localhost:4000/rollers")
      .then((r) => r.json())
      .then((data) => setRollers(data));
    fetch("http://localhost:4000/hotncold")
      .then((r) => r.json())
      .then((data) => setHotnCold(data));

  }, []);


  const [isOpen, setIsOpen] = useState(false)
  const [itemDisplayed, setItemDisplayed] = useState({})

  function togglePopUp(){
    setIsOpen(!isOpen)
  }

  function handleItemClick(item){
    setItemDisplayed(item)
  }

  const bracesDisplayed = braces.map((brace) => {
    return (
      <ItemCard
      key={brace.id}
      items={brace}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}
      />
    )
  })

  const exerciseEqDisplayed = exercise.map((exerciseEp) => {
    return (
      <ItemCard
      key={exerciseEp.id}
      items={exerciseEp}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}
      />
    )
  })

  const rollersDisplayed = rollers.map((roller) => {
    return (
      <ItemCard
      key={roller.id}
      items={roller}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}
      />
    )
  })

  const hotncoldEqDisplayed = hotncold.map((hotncoldEq) => {
    return (
      <ItemCard
      key={hotncoldEq.id}
      items={hotncoldEq}
      handleItemClick={handleItemClick} 
      togglePopUp={togglePopUp}
      />
    )
  })
  
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>


        <Carousel className="mx-auto" style={{ width: "60%"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1201247867/vector/isometric-rehabilitation-physiotherapy-set.jpg?s=612x612&w=0&k=20&c=LwOs6-UAMGQOXT6ML88EUFfU4nCeBarkMCWQtPFwTjI="
              alt="First slide"
              id="adsCarouselImg"
            />
          </Carousel.Item>
 
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1176367049/vector/isometric-rehab-people-icons.jpg?s=612x612&w=0&k=20&c=yFQqhRS_ZS_GUCKGf8tE1J9t6hrjZzBt6rDtSb5mPqw="
              alt="Third slide"
              id="adsCarouselImg"
            />

          </Carousel.Item>
        </Carousel>


      <br/>
      <br/>
      <br/>


      <h2 style={{marginLeft: "50px"}}><u>Trending Braces</u></h2>
      <br/> 
      <br/> 
   

      <Row md={4} className="g-1" style={{rowGap: "50px"}}>
        {bracesDisplayed}
      </Row>
    

      <br/>
      <br/>
      <br/>
      <br/>
      
      <h2 style={{marginLeft: "50px"}}><u>Exercise Equipment</u></h2>
      <br/>
      <br/>

      <Row md={4} className="g-1" style={{rowGap: "50px"}}>
        {exerciseEqDisplayed}
      </Row>

      <br/>
      <br/>
      <br/>
      
      
      <Carousel className="mx-auto" style={{ width: "60%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.webpt.com/wp-content/uploads/2014/03/201403_blog_purchasingEquipmentAndSupplies_1.png"
            alt="Second slide"
            id="adsCarouselImg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.advantagemedical.com/media/wysiwyg/megaMenu/AdvantageMedical/ADV_menu_ads_rehab.png"
            alt="Third slide"
            id="adsCarouselImg"
          />
        </Carousel.Item>
      </Carousel>

    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <h2 style={{marginLeft: "50px"}}><u>Foam & Massager Rollers</u></h2>
      <br/>
      <br/>
 
      <Row md={4} className="g-1" style={{rowGap: "50px"}}>
        {rollersDisplayed}
      </Row>

      <br/>
      <br/>
      <br/>
      <br/>

      <h2 style={{marginLeft: "50px"}}><u>Hot N Cold</u></h2>

      <br/>
      <br/>
      
      <Row md={4} className="g-1" style={{rowGap: "50px"}}>
        {hotncoldEqDisplayed}
      </Row>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      {isOpen && <ItemPopUp
        togglePopUp={togglePopUp}
        isOpen={isOpen}
        itemDisplayed={itemDisplayed}
      />}

    </>
  );
}
export default StoreHomePage;