import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPTs } from "./ptsSlice";
import AppointmentForm from "./AppointmentForm";
import { selectUser } from "./userSlice";


function ScheduleAppointment({setShowScheduleAppointment, setShowConfirmation, givenConfirmationInfo}) {

  const [keysToSimplyPT, setKeysToSimplyPT] = useState(null);

  useEffect(() => {

    fetch("/keysToSimplyPT")
      .then(response => response.json())
      .then(data => setKeysToSimplyPT(data))

  }, []);

  
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
  // const allPTs = useSelector((state) => state.pts.entities);

  const user = useSelector(selectUser);


  const [appointmentInfo, setAppointmentInfo] = useState({
    patient_id: user.id,
    physical_therapist_id: "",
    date: "",
    time: "9 am",
  });


  const handlePTInfo = (e) => {
    console.log(e.target.name)

    const selectedPT = allPTs.find((pt) => pt.name === e.target.name)

    setPhysicalTherapist(selectedPT)
    setAppointmentInfo({...appointmentInfo, physical_therapist_id: selectedPT.id})
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

      {physicalTherapist !== "" ? <AppointmentForm physicalTherapist={physicalTherapist} setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo} keysToSimplyPT={keysToSimplyPT} appointmentInfo={appointmentInfo} setAppointmentInfo={setAppointmentInfo}/> : ""}





       
    </div>
  );
}


export default ScheduleAppointment;