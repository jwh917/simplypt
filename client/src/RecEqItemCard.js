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
    
      <Card className="card mx-auto" style={{width: '15rem', height: "350px", textAlign: "center", backgroundColor: "silver", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", display: "flex", justifyContent: "center"}}>
        <Card.Title>{name}</Card.Title>

        <Card.Img style={{ width: "150px", height: "150px", marginLeft: "45px", marginTop: "20px", marginBottom: "10px"}} src={itemUrl} />
        <h6>Details: {color} <br/> ${price}</h6>

        <span>  
          {showConfirm ? (
            <div>
              <p>Are you sure you want reccomend {name}?</p>
              <button className="buttonEffect" onClick={recommendedItem} style={{ backgroundColor: "white", borderRadius: "5px", color: "green", marginBottom: "40px"}}>Confirm</button>
              &nbsp;
              <button className="buttonEffect" onClick={() => setShowConfirm(false)} style={{ backgroundColor: "white", borderRadius: "5px", color: "red"}}>Cancel</button>
            </div>
            ) : (
            <button className="buttonEffect" onClick={handleClick} style={{ fontSize: "18px", fontWeight: "800", borderRadius: "5px", width: "fit-content"}}>Recommend</button>
            )}
        </span> 
      
      </Card>

  </Col>
  );
}
  

export default RecEqItemCard;