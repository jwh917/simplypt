import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';

import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';




function ItemPopUp({togglePopUp, isOpen, itemDisplayed, setItemsCountRefresher}) {
  const [size, setSize] = useState("")

  function newSize(event){
    setSize(event.target.value)
  }

  const {name, category, color, itemUrl, productDetails, price} = itemDisplayed

  function addToCart(){

    const newCartItem = {
      item: itemDisplayed,
      size: size,
    }


    if(newCartItem.item.category === "braces" && newCartItem.size === "") return


    fetch("http://localhost:4000/myCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCartItem),
    })
      .then((r) => r.json())
      .then((newCartItemData) => {
        togglePopUp()
        setItemsCountRefresher(newCartItemData)
      })
      alert(`${newCartItem.item.name} Has Been Added To The Cart`)
  }


  function showProductDetails(){
    if(productDetails === ""){
      return ""
    }
    else
      return (
        <div>
          <h4><u>Product Details:</u></h4>
          <p>{productDetails}</p>
        </div>
      )
  }


  function itemSizing(){
   
    if(category === "braces"){
      return(
        <select name="size" onChange={newSize}>
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="Large">L</option>
          <option value="X-Large">XL</option>
        </select>
      )
    }

    if(category === "exercise" || category === "rollers"|| category === "hotncold"){
      return(
        <select name="size" onChange={newSize}>
          <option value="NoSize">No Size</option>

        </select>
      )
    }

  }

  

  return (
    <>
      <Modal show={isOpen} onHide={togglePopUp} animation={true} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="popupHeader"><u>{name}</u></h1>
            <p className="popupHeader"><u>{color}</u></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Image className="d-block mx-auto" src={itemUrl} alt={name} thumbnail fluid="true"/> 
          <br/>
          <br/>
          
          <Badge className="badge bg-secondary" id="itemPopUpBadge">
            <h4>Price: ${price}</h4>
          </Badge>

          <br/>
          <br/>

          
          {showProductDetails()}

          <br/>
          
          <Badge className="badge bg-secondary" id="itemPopUpBadge">
            <h5>Size</h5>
            {itemSizing()}
          </Badge>


          
        </Modal.Body>
        <Modal.Footer>
          
          <Button className="btn btn-secondary" onClick={addToCart}  id="buttonEffect3">Add To Cart</Button>

        </Modal.Footer>
      </Modal>
    </>

  );
}

export default ItemPopUp;