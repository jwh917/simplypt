import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ItemCard({items, handleItemClick, togglePopUp}) {

  const {itemUrl, name, color, price} = items

  function clickedItem(event){
    handleItemClick(items)
    togglePopUp()
  }

  return (
    <div>
    
      <Card className="storeItems" style={{marginLeft: "25px", width: '15rem', height: "27rem", textAlign: "center", backgroundColor: "silver", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}} onClick={clickedItem}>
        <Card.Img style={{ width: "150px", height: "150px", marginLeft: "50px", marginTop: "20px", marginBottom: "10px"}} src={itemUrl} />
        <Card.Body style={{ width: "fit-content"}}>
          <Card.Title><h3>{name}</h3></Card.Title>
          <br/>
          <h4>Color: {color}</h4>
          <br/>
          <h4>Price: ${price}</h4>
        </Card.Body>
      </Card>

  </div>
  );
}
  

export default ItemCard;