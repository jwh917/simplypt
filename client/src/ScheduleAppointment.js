import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPTs } from "./ptsSlice";
import AppointmentForm from "./AppointmentForm";


function ScheduleAppointment({setShowScheduleAppointment, setShowConfirmation, givenConfirmationInfo}) {
  
  const [physicalTherapist, setPhysicalTherapist] = useState("");

  // console.log(physicalTherapist)

  const handleScheduleAppClose = () => {
    setShowScheduleAppointment(false);
    // or !==
  };

  const allPTs = useSelector((state) => state.pts.entities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPTs());
  }, [dispatch]);

  // console.log(allPTs)


  const handlePTInfo = (e) => {
    setPhysicalTherapist(e.target.name)
  };



  return (

    <div>
      
      <br/>

      <button onClick={handleScheduleAppClose}>
        X
      </button>

      <br/>
      <br/>

      Physical Therapists

      <br/>
      <br/>

      {allPTs.map((pt) => (
        <button key={pt.id} name={pt.name}onClick={handlePTInfo}>
          <img name={pt.name} style={{height:"100px", width:"100px"}} src={pt.image} alt="pt" />
          <br/>
          {pt.name}
          <br/>
          <br/>
          Physical Therapist
          <br/>
        </button>
      ))}

      <br/>
      <br/>

      {physicalTherapist !== "" ? <AppointmentForm physicalTherapist={physicalTherapist} setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo}/> : ""}





       
    </div>
  );
}


export default ScheduleAppointment;