import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addAppointment, addPhysicalTherapist } from "./userSlice";
import { appointmentCreate } from "./appointmentSlice";



function AppointmentForm({physicalTherapist, setShowScheduleAppointment, setShowConfirmation , givenConfirmationInfo}) {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  // console.log(user)

  const allPTs = useSelector((state) => state.pts.entities);

  const selectedPT = allPTs.find((pt) => pt.name === physicalTherapist)

  const [appointmentInfo, setAppointmentInfo] = useState({
    patient_id: user.id,
    physical_therapist_id: selectedPT.id,
    date: "",
    time: "9",
  });


  function appointmentChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name)
    // console.log(value)

    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  }

  // console.log(appointmentInfo)


  const appointmentSubmit = (e) => {
    e.preventDefault();
    dispatch(appointmentCreate(appointmentInfo));
    dispatch(addAppointment(appointmentInfo));
    dispatch(addPhysicalTherapist(selectedPT));

    setShowScheduleAppointment(false)
    setShowConfirmation(true)

    const newConfirmationInfo = {
      patient_info: user,
      pt_info: selectedPT,
      date: appointmentInfo.date,
      time: appointmentInfo.time
    }

    givenConfirmationInfo(newConfirmationInfo)
  };

  let today = new Date().toISOString().split('T')[0];


  return (

    <div>
      {/* Appointment times already booked */}
      
      Fill Out Appointment Form
      <br/>
      <br/>
      <form onSubmit={appointmentSubmit}>

        <label htmlFor="physical_therapist_name">Physical Therapist Name: </label>
        <input type="text" name="physical_therapist_name" readOnly value={physicalTherapist}/>
        
        <br/>
        <br/>

        <label htmlFor="date">Date: </label>
        <input type="date" name="date" min={today} onChange={appointmentChange}/>

        <br/>
          {/* Show current date no appointments show next date and already taken appointments on that day and disable the time on time options -  */}
        <br/>

        <label htmlFor="time">Time:</label>
        <select name="time" onChange={appointmentChange}>
          <option value="9 am">9 am</option>
          <option value="10 am">10 am</option>
          <option value="11 am">11 am</option>
          <option value="12 pm">12 pm</option>
          <option disabled value="1">1 pm</option>
          <option value="2 pm">2 pm</option>
          <option value="3 pm">3 pm</option>
          <option value="4 pm">4 pm</option>
          <option value="5 pm">5 pm</option>
        </select>

        <br/>
        <br/>

        <button>Book Appointment</button>

      </form>
    </div>
  );
}


export default AppointmentForm;