import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';



function ItemCard({items, handleItemClick, togglePopUp}) {

  const {itemUrl, name, color, price} = items

  function clickedItem(event){
    handleItemClick(items)
    togglePopUp()
  }

  return (
    <Col>
    
      <Card className="card mx-auto" id="itemCard" onClick={clickedItem}>
        <Card.Img id="itemCardImg" src={itemUrl} />
        <Card.Body id="itemCardBody">
          <Card.Title><h3>{name}</h3></Card.Title>
          <br/>
          <h4>Color: {color}</h4>
          <br/>
          <h4>Price: ${price}</h4>
        </Card.Body>
      </Card>

  </Col>
  );
}
  

export default ItemCard;