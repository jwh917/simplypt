import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';



function ItemPopUp({togglePopUp, isOpen, itemDisplayed}) {
  const [size, setSize] = useState("")

  function newSize(event){
    setSize(event.target.value)
  }

  
  if(isOpen) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
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
        console.log(newCartItemData)
        togglePopUp()
      });

  

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
    <div>
       <div className="popup-box">
         <div className="box">

          <h1 className="popupHeader"><u>{name}</u></h1>
          <p className="popupHeader"><u>{color}</u></p>

          <div className="clickedItem">
    
            <img src={itemUrl} alt="item pic"/>
          </div>

          <br/>

            <div className="itemInfo">
              <Badge className="badge bg-secondary">
                <h4>Price: ${price}</h4>
              </Badge>
              <br/>
              <br/>
              <br/>

              {showProductDetails()}
            </div>

            <div className="clickedItemInfo">

              <br></br>
              <br></br>
              <br></br>


              <Badge className="badge bg-secondary" id="buttonEffect3">
                <h5>Size</h5>
                {itemSizing()}
              </Badge>

              <br></br>
              <br></br>
              <Button className="btn btn-secondary" onClick={addToCart}  id="buttonEffect3">Add To Cart</Button>
            </div>

           <span className="close-icon" onClick={togglePopUp}>x</span>
         </div>
      </div>
  
    </div>

  );
}

export default ItemPopUp;