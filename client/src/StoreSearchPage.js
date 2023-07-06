import React, { useState, useEffect } from "react";
import ItemPopUp from "./ItemPopUp";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ptPic8 from './ptPic8.png'; 
import ItemCard from "./ItemCard";

import Row from 'react-bootstrap/Row';




function StoreSearchPage(){


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


  const [catorgey, setCatorgey] = useState('All');

  
  const [isOpen, setIsOpen] = useState(false)
  const [itemDisplayed, setItemDisplayed] = useState({})

  const [searchInput, setSearchInput] = useState("")


  const [sortHighLow, setSortHighLow] = useState(false)
  const [sortLowHigh, setSortLowHigh] = useState(false)

 

  const allItems = [...braces, ...exercise, ...rollers, ...hotncold]


  function togglePopUp(){
    setIsOpen(!isOpen)
  }

  function handleItemClick(item){
    setItemDisplayed(item)

  }

  function itemSearch(event){
    setSearchInput(event.target.value)
  }



  function handleCatorgeyChange(selectCatorgey){
    setCatorgey(selectCatorgey)
  }


  function sortHandleHighLow(){
    setSortHighLow((prevState) => !prevState)
    setSortLowHigh(false)
  }

  function sortHandleLowHigh(){
    setSortLowHigh((prevState) => !prevState) 
    setSortHighLow(false)
  }

  function helpSort(sortLowHigh, sortHighLow, plant1, plant2){
    if(sortLowHigh === true){
      return plant1.price - plant2.price
    }
    if((sortHighLow === true)){
      return plant2.price - plant1.price
    }
  }

  const [key, setKey] = useState("All");


  function knowKey(k){
    setKey(k)
    handleCatorgeyChange(k)

  }



const searchedItems = allItems.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))

const searchedBraces = braces.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))

const searchedExercise = exercise.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))

const searchedRollers = rollers.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))

const searchedHotncold = hotncold.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())).sort((item1, item2) => helpSort(sortLowHigh, sortHighLow, item1, item2))


const allItemsDisplayed = searchedItems.map((item, index) => {
  return(
    <ItemCard
    key={index}
    items={item}
    handleItemClick={handleItemClick} 
    togglePopUp={togglePopUp} 
    />
  )
})


const allBracesDisplayed = searchedBraces.map((item, index) => {
  return(
    <ItemCard
    key={index}
    items={item}
    handleItemClick={handleItemClick} 
    togglePopUp={togglePopUp} 
    />
  )
})

const allExerciseEqDisplayed = searchedExercise.map((item, index) => {
  return(
    <ItemCard
    key={index}
    items={item}
    handleItemClick={handleItemClick} 
    togglePopUp={togglePopUp} 
    />
  )
})


const allRollersDisplayed = searchedRollers.map((item, index) => {
  return(
    <ItemCard
    key={index}
    items={item}
    handleItemClick={handleItemClick} 
    togglePopUp={togglePopUp} 
    />
  )
})

const allHotnColdDisplayed = searchedHotncold.map((item, index) => {
  return(
    <ItemCard
    key={index}
    items={item}
    handleItemClick={handleItemClick} 
    togglePopUp={togglePopUp} 
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

  
  return (
    <>
      {/* StoreSearchPage 🔎 */}        
        
     
            <div className="container-fluid">
                <div className="row p-2 pt-3 pb-3 d-flex align-items-center">

                  <br/>
                  <br/>
                  <input className="form-control" type="text" placeholder="Search any item..." onChange={itemSearch} style={{ width: "50%", height: "40px", textAlign: "center", margin: "0 auto", display: "block"}}/>
                  <br/>
                  <br/>


                  
                  <hr/>
                  <br></br>
                  <br></br>
                    
                    <div className="tabsContainer">

                      <Tabs id="controlled-tab-example" activeKey={key} onSelect={knowKey} className="mb-3">
                        <Tab eventKey="All" title="All"></Tab>                        
                        <Tab eventKey="Braces" title="Braces"></Tab>
                        <Tab eventKey="Exercise" title="Exercise"></Tab>
                        <Tab eventKey="Rollers" title="Rollers"></Tab>
                        <Tab eventKey="HotnCold" title="HotnCold"></Tab>
                      </Tabs>

                    </div>

                  <div className="categoryGrid">

                    <div className="badge bg-secondary" id="sortBadge">
                      Sort Prices

                      <br></br>
                      <br></br>

                      {sortHighLow ? (
                        <button onClick={sortHandleHighLow} id="activeButton" className="btn btn-light">(High to Low) <i className="bi bi-arrow-up-square-fill"></i></button>
                      ) : (
                        <button onClick={sortHandleHighLow} className="btn btn-light">(High to Low) <i className="bi bi-arrow-up-square"></i></button>
                      )}

                      <br></br>
                      <br></br>

                      {sortLowHigh ? (
                        <button onClick={sortHandleLowHigh} id="activeButton" className="btn btn-light">(Low to High) <i className="bi bi-arrow-down-square-fill"></i></button>
                      ) : (
                        <button onClick={sortHandleLowHigh} className="btn btn-light">(Low to High) <i className="bi bi-arrow-down-square"></i></button>
                      )}
                    
                    </div>

                    <div>
                      <img src={ptPic8} alt="ptPic8" id="ptPic8" style={{borderRadius: "5px"}}/>
                    </div>
                    
                  </div>
     
                </div>
            </div> 

        <hr/>

        <br/>                  
        <br/>                  
        <Row md={4} className="g-1" style={{rowGap: "50px"}}>
          {displayItems()}
        </Row>


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
export default StoreSearchPage;