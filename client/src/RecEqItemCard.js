import React, {useState} from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';


function RecEqItemCard({patientId, userId, items}) {

  const {itemUrl, name, color, price} = items

  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  function recommendedItem(e){
    e.preventDefault();

    const productDesc = `${color}, $${price}`

    const newRecommendedItem = {
      patient_id: patientId,
      physical_therapist_id: userId,
      product_name: items.name,
      product_url: items.itemUrl,
      product_description: productDesc   
    }

 
    fetch("/recommended_equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecommendedItem),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((newRecommendedItem) => 
        console.log(newRecommendedItem))
        alert(`Patient Has Been Reccomended ${name}`)

      } 
      else {
        r.json().then((err) => console.log(err.errors));
      }
    })
    
    setShowConfirm(false)

 }

  return (
    <Col>
    
      <Card className="card mx-auto" id="RecEqItemCard">
        <Card.Title>{name}</Card.Title>

        <Card.Img  src={itemUrl} />
        <h6>Details: {color} <br/> ${price}</h6>

        <span>  
          {showConfirm ? (
            <div>
              <p>Are you sure you want reccomend {name}?</p>
              <button className="buttonEffect" onClick={recommendedItem} id="RecEqItemCardButton0">Confirm</button>
              &nbsp;
              <button className="buttonEffect" onClick={() => setShowConfirm(false)} id="RecEqItemCardButton1">Cancel</button>
            </div>
            ) : (
            <button className="buttonEffect" onClick={handleClick} id="RecEqItemCardButton2">Recommend</button>
            )}
        </span> 
      
      </Card>

  </Col>
  );
}
  

export default RecEqItemCard;