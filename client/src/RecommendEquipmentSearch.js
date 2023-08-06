import React, { useState, useEffect } from "react";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';

import RecEqItemCard from "./RecEqItemCard";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

function RecommendEquipmentSearch({patientId, setShowRecommendEquipmentSearch}){

  const user = useSelector(selectUser);

  function closeSearch(){
    setShowRecommendEquipmentSearch(false)
  }

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

      window.scrollBy(0, 425);


  }, []);



  const [catorgey, setCatorgey] = useState('All');

  const [searchInput, setSearchInput] = useState("")

  const allItems = [...braces, ...exercise, ...rollers, ...hotncold]


  function itemSearch(event){
    setSearchInput(event.target.value)
  }


  function handleCatorgeyChange(selectCatorgey){
    setCatorgey(selectCatorgey)
  }

  const [key, setKey] = useState("All");


  function knowKey(k){
    setKey(k)
    handleCatorgeyChange(k)

  }



const searchedItems = allItems.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))

const searchedBraces = braces.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))

const searchedExercise = exercise.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))

const searchedRollers = rollers.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))

const searchedHotncold = hotncold.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))


const allItemsDisplayed = searchedItems.map((item, index) => {
  return(
    <RecEqItemCard
    key={index}
    items={item}
    patientId={patientId}
    userId={user.id}
    />
  )
})


const allBracesDisplayed = searchedBraces.map((item, index) => {
  return(
    <RecEqItemCard
    key={index}
    items={item}
    patientId={patientId}
    userId={user.id}
    />
  )
})

const allExerciseEqDisplayed = searchedExercise.map((item, index) => {
  return(
    <RecEqItemCard
    key={index}
    items={item}
    patientId={patientId}
    userId={user.id}
    />
  )
})


const allRollersDisplayed = searchedRollers.map((item, index) => {
  return(
    <RecEqItemCard
    key={index}
    items={item}
    patientId={patientId}
    userId={user.id}
    />
  )
})

const allHotnColdDisplayed = searchedHotncold.map((item, index) => {
  return(
    <RecEqItemCard
    key={index}
    items={item} 
    patientId={patientId}
    userId={user.id}
    />
  )
})

function displayItems(){
  if(catorgey === "All"){
    return allItemsDisplayed
  }

  if(catorgey === "Braces"){
    return allBracesDisplayed
  }

  if(catorgey === "Exercise"){
    return allExerciseEqDisplayed
  }

  if(catorgey === "Rollers"){
    return allRollersDisplayed
  }

  if(catorgey === "HotnCold"){
    return allHotnColdDisplayed
  }

}


function showPatientInfo(patientId){
  const patientInfo = user.patients.find((patient) => patient.id === parseInt(patientId))
  return patientInfo.name
}


  
  return (
    <>
      <h1>Equipment Recommendations</h1>
      <h2>For Patient: {showPatientInfo(patientId)}</h2>
      <button className="buttonEffect" onClick={closeSearch} style={{marginLeft: "45px", backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "40px"}}>X</button>

      <div className="container-fluid">
        <div className="row p-2 pt-3 pb-3 d-flex align-items-center">

          <br/>
          <br/>
                    
          <input className="form-control" type="text" placeholder="Search any item..." onChange={itemSearch} style={{ width: "50%", height: "40px", textAlign: "center", margin: "0 auto", display: "block"}}/>
          <br/>
          <br/>


                    
          <hr/>
          <br/>
          <br/>
          
          <div className="tabsContainer">

                        
            <Tabs id="controlled-tab-example" className="mb-3" activeKey={key} onSelect={knowKey}>
              <Tab eventKey="All" title="All"></Tab>                        
              <Tab eventKey="Braces" title="Braces"></Tab>
              <Tab eventKey="Exercise" title="Exercise"></Tab>
              <Tab eventKey="Rollers" title="Rollers"></Tab>
              <Tab eventKey="HotnCold" title="HotnCold"></Tab>
            </Tabs>

          </div>

        </div>
      </div> 
          
      <hr/>
          
      <br/>                  
      <br/>              
          
      
      <Row md={2} className="g-1" style={{rowGap: "50px"}}>
        {displayItems()}
      </Row>

    </>
  );
}
export default RecommendEquipmentSearch;