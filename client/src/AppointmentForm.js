import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addAppointment, addPhysicalTherapist } from "./userSlice";
// import emailjs from '@emailjs/browser';



function AppointmentForm({physicalTherapist, setShowScheduleAppointment, setShowConfirmation , givenConfirmationInfo, emailService, emailKey}) {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [errors, setErrors] = useState([]);

  // console.log(user)
  // console.log(errors)

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


  const appointmentSubmit = (e) => {
    e.preventDefault();

    const newAppointmentInfo = {
      patient_id: user.id,
      physical_therapist_id: selectedPT.id,
      date: appointmentInfo.date,
      time: appointmentInfo.time
    }

    const newConfirmationInfo = {
      patient_info: user,
      pt_info: selectedPT,
      date: appointmentInfo.date,
      time: appointmentInfo.time
    }

    console.log(newConfirmationInfo)

    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointmentInfo),
      }).then((r) => {
        // console.log(r)
      if (r.ok) {
        r.json().then((newAppointmentInfo) => {
            dispatch(addAppointment(newAppointmentInfo))
            dispatch(addPhysicalTherapist(selectedPT))
            setShowScheduleAppointment(false)
            setShowConfirmation(true)
            // givenConfirmationInfo(newConfirmationInfo)

            // emailjs.send(`${emailService.email_service}`, "template_kvqnewo", newConfirmationInfo, `${emailKey.email_key}`)
            //   .then(res => {
            //     console.log("Success", res)
            //   }, error => {
            //     console.log("Failed...", error)
            //   })
        
          
          })
      } else {
        r.json().then((err) => {
          setErrors(err.error)
        e.target.reset();

        });
      }

    });

    // dispatch(addPhysicalTherapist(selectedPT))
    // setShowScheduleAppointment(false)
    // setShowConfirmation(true)
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

        {errors.map((err) => (<h6 key={err}>{err}</h6>))}


        <button>Book Appointment</button>

      </form>
    </div>
  );
}


export default AppointmentForm;