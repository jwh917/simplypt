import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function StoreMyCartPageCard({myCartItem, handleDelItem}) {

  const { itemUrl, name, color, price, category} = myCartItem.item
  const { id, size } = myCartItem

  function handleSizeChange(event){

    const newSize = event.target.value

    fetch(`http://localhost:4000/myCart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({size: newSize}),
    })
      .then((r) => r.json())
      .then((newSizeData) => console.log(newSizeData))
      
  }


  function handleDeleteClick() {
    
    fetch(`http://localhost:4000/myCart/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDelItem(myCartItem));

    alert("Item Has Been Deleted From The Cart")


  }
  
  function itemSizing(){
   
    if(category === "braces"){
      return(
        <select name="size" defaultValue={size} onChange={handleSizeChange}>
          <option value="Small">S</option>
          <option value="Medium">M</option>
          <option value="Large">L</option>
          <option value="X-Large">XL</option>
        </select>
      )
    }

    if(category === "exercise" || category === "rollers"|| category === "hotncold"){
      return(
        <select name="size">
          <option value="NoSize">No Size</option>

        </select>
      )
    }

  }


  return (
    <main >
      <div>

        <div>
          <img src={itemUrl} alt="my cart item" className="myCartItemImg" />
          <br></br>
          {name}
          <p>{color}</p>
          
          {itemSizing()}
          <br></br>
          
          <span className="price">${price}</span>

          <br></br>

          <span onClick={handleDeleteClick} style={{cursor: "pointer"}}>🗑</span>

        </div>
        <br></br>
      </div>

    </main>
  );
}

export default StoreMyCartPageCard;