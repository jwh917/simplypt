import React from "react";


function NewConfirmationInfo({setShowConfirmation, confirmationInfo}) {

  function closeConfirmation(){
    setShowConfirmation(false)
  }
  
 
  return (
    <div className="newConfirmationInfoDiv">

      <br/>
      <br/>

      <button onClick={closeConfirmation} id="xButton">
        X
      </button>
      <br/>
      <br/>
      <br/>
      Simply PT
      <br/>
      <br/>
      
      Appointment Confirmation
      <br/>

      Dear {confirmationInfo.patient_info.name},
      We have successfully scheduled your next physical therapist appointment for: 
      <br/>
      <br/>

      {confirmationInfo.date} at {confirmationInfo.time} !! 😃👍
      <br/>
      👨🏾‍⚕️|👩🏻‍⚕️ with {confirmationInfo.pt_info.name} 

      <br/>
      <br/>

      Please remember to bring:
      <ul>
        <li>Insurance Card and ID</li>
        <li>And Method of Payment</li>
      </ul>

      An email will be sent with your confirmation information.

      <br/>
      <br/>
      
    </div>
  );
}


export default NewConfirmationInfo;