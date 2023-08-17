import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPTs } from "./ptsSlice";
import AppointmentForm from "./AppointmentForm";
import { selectUser } from "./userSlice";

import Image from 'react-bootstrap/Image';


const allPTsButton = {
  marginLeft: "30px", 
  borderRadius: "10px", 
  height: "220px", 
  marginTop: "25px"
};


function ScheduleAppointment({setShowScheduleAppointment, setShowConfirmation, givenConfirmationInfo}) {

  const [keysToSimplyPT, setKeysToSimplyPT] = useState(null);

  useEffect(() => {

    fetch("/keysToSimplyPT")
      .then(response => response.json())
      .then(data => setKeysToSimplyPT(data))

  }, []);

  
  const [physicalTherapist, setPhysicalTherapist] = useState("");


  const handleScheduleAppClose = () => {
    setShowScheduleAppointment(false);
  };

  const allPTs = useSelector((state) => state.pts.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPTs());
  }, [dispatch]);


  const user = useSelector(selectUser);


  const [appointmentInfo, setAppointmentInfo] = useState({
    patient_id: user.id,
    physical_therapist_id: "",
    date: "",
    time: "9 am",
  });


  const handlePTInfo = (e) => {
    const selectedPT = allPTs.find((pt) => pt.name === e.target.name)

    setPhysicalTherapist(selectedPT)
    setAppointmentInfo({...appointmentInfo, physical_therapist_id: selectedPT.id})
  };



  return (

    <div> 
      
      <br/>
      <br/>


      <button className="buttonEffect" onClick={handleScheduleAppClose} id="xButton">
        X
      </button>

      <br/>
      <br/>
      <br/>

      {allPTs.map((pt) => (
        <button key={pt.id} name={pt.name}onClick={handlePTInfo} style={allPTsButton}>
          {pt.name}
          <br/>
          <Image name={pt.name} height="100px" width="100px" src={pt.image} alt="pt" thumbnail />
          <br/>
          Physical Therapist
          <br/>
        </button>
      ))}

      <br/>
      <br/>

      {physicalTherapist !== "" ? <AppointmentForm physicalTherapist={physicalTherapist} setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo} keysToSimplyPT={keysToSimplyPT} appointmentInfo={appointmentInfo} setAppointmentInfo={setAppointmentInfo}/> : ""}





       
    </div>
  );
}


export default ScheduleAppointment;