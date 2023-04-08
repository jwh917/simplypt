import React, {useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import StoreMyCartPageCard from "./StoreMyCartPageCard";
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

function StoreMyCartPage(){

  const [myCart, setMyCart] = useState([])

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")


  const [cardName, setCardName] = useState("")
  const [cardNum, setCardNum] = useState("")
  const [expMon, setExpMon] = useState("")
  const [expYr, setExpYr] = useState("")
  const [cvv, setCvv] = useState("")

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://kit.fontawesome.com/17a0ff6ff9.js";
    script.async = true;
  
    document.body.appendChild(script);
  
  }, []);


  useEffect(() => {
    fetch("http://localhost:4000/myCart")
      .then((r) => r.json())
      .then((myCartData) => setMyCart(myCartData));
  }, []);

  const itemsCount = myCart.length

  const sumTotal = myCart.map((myCartItem) => myCartItem.item.price)
  const total = sumTotal.reduce((partialSum, a) => partialSum + a, 0);


  const history = useHistory();


  const myCartItems = myCart.map((myCartItem) => {
    return(
      <StoreMyCartPageCard
      key={myCartItem.id}
      myCartItem={myCartItem}
      handleDelItem={handleDelItem}
      />
    )
  })

  function handleDelItem(deletedItem){
    const updatedCart = myCart.filter((item) => item.id !== deletedItem.id);
    setMyCart(updatedCart)
  }

  function fullNameInput(event){
    setFullName(event.target.value)
  }

  function emailInput(event){
    setEmail(event.target.value)
  }

  function addressInput(event){
    setAddress(event.target.value)
  }

  function cityInput(event){
    setCity(event.target.value)
  }

  function stateInput(event){
    setState(event.target.value)
  }

  function zipCodeInput(event){
    setZipCode(event.target.value)
  }

  function cardNameInput(event){
    setCardName(event.target.value)
  }

  function cardNumInput(event){
    setCardNum(event.target.value)
  }

  function expMonInput(event){
    setExpMon(event.target.value)
  }

  function expYrInput(event){
    setExpYr(event.target.value)
  }

  function cvvInput(event){
    setCvv(event.target.value)
  }

  function afterCheckOut(myCart){
    myCart.map((item) => {
      return fetch(`http://localhost:4000/myCart/${item.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
    })
  }


  function formSumbitHandle(event){
    event.preventDefault()

    const newCompletedOrder = {
      fullName: fullName,
      email: email,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode,
      cardName: cardName,
      cardNum: cardNum,
      expMon: expMon,
      expYr: expYr,
      cvv: cvv,
      myCart: myCart,
      total: total
    }

    // error or window saying which ever one isnt filled
    if(newCompletedOrder.fullName === "" || newCompletedOrder.email === "" || newCompletedOrder.email === "" || newCompletedOrder.address === "" || newCompletedOrder.city === "" || newCompletedOrder.state === "" || newCompletedOrder.zipCode === "" || newCompletedOrder.cardName === "" || newCompletedOrder.cardNum === "" || newCompletedOrder.expMon === "" || newCompletedOrder.expYr === "" || newCompletedOrder.cvv === "" || newCompletedOrder.myCart.length === 0 || newCompletedOrder.total === 0) return

    fetch("http://localhost:3000/completedOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCompletedOrder),
    })
      .then((r) => r.json())
      .then((newCompletedOrderData) => console.log(newCompletedOrderData));

    event.target.reset()

    afterCheckOut(myCart)

    history.push("/")
  }
  
  return (
    <>
      {/* StoreMyCartPage 🛒 */}
     <br/>
     <br/>
     <br/>
{/* myCartHeader */}
      <div>
        <h1 className="myCartHeader"> <i className="bi bi-cart-fill"></i> MyCart</h1>
        <p className="myCartHeader">{itemsCount} Items</p>
      </div>

{/* myCartItemsContainer */}
      <div className="col-25" id="myCartItemsContainer" >
        <div>
          {myCartItems}
          <hr></hr>
          <p>Total <span style={{color: "black"}}><b>${total.toLocaleString('en-US')}</b></span></p>
        </div>
      </div>

{/* container */}
      <br/>
      <br/>
      <br/>
      <div className="container">
        <form id="my-form" onSubmit={formSumbitHandle}>

          <div className="grid-child"> 
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name: </label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" onChange={fullNameInput}/> <br/>
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email: </label>
            <input type="text" id="email" name="email" placeholder="john@example.com" onChange={emailInput}/> <br/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address: </label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" onChange={addressInput}/> <br/>
            <label htmlFor="city"><i className="fa fa-institution"></i> City: </label>
            <input type="text" id="city" name="city" placeholder="New York" onChange={cityInput}/> <br/>

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State: </label>
                <input type="text" id="state" name="state" placeholder="NY" onChange={stateInput}/> <br/>
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip: </label>
                <input type="text" id="zip" name="zip" placeholder="10001" onChange={zipCodeInput}/>
              </div>
            </div>
          </div>
            
          <br></br>
          <br></br>

          <div className="grid-child">
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" id="visaCard"></i>
              <i className="fa fa-cc-amex" id="amexCard"></i>
              <i className="fa fa-cc-mastercard" id="masterCard"></i>
              <i className="fa fa-cc-discover" id="discoverCard"></i>
            </div>
              <label htmlFor="cname">Name on Card</label>
              <input type="text" id="cname" name="cardname" placeholder="John More Doe" onChange={cardNameInput}/>
              <label htmlFor="ccnum">Credit card number</label>
              <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" onChange={cardNumInput}/> <br/>
              <label htmlFor="expmonth">Exp Month</label>
              <input type="text" id="expmonth" name="expmonth" placeholder="September" onChange={expMonInput}/>
              <div className="row">
                <div className="col-50">
                  <label htmlFor="expyear">Exp Year</label>
                  <input type="text" id="expyear" name="expyear" placeholder="2018" onChange={expYrInput}/>
                </div>
                <div className="col-50">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" onChange={cvvInput}/>
                </div>
              </div>
          
          
            <label>
              <input type="checkbox" defaultChecked="checked" name="sameadr"/> Shipping address same as billing
            </label>
          </div>
          
        </form>
      </div>

{/* checkoutbar */}
      <div>
        <Badge className="badge bg-secondary" id="checkoutBarBadge">         
          <div>
            <h3> Delivery Cost: FREE</h3>
            <h2> Total: ${total.toLocaleString('en-US')}</h2>
            <Button className="btn btn-light" id="checkoutBarButton" type="submit" form="my-form"> Checkout </Button>
          </div>
        </Badge>
      </div>



    </>
  );
}
export default StoreMyCartPage;