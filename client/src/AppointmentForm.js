import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addAppointment, addPhysicalTherapist } from "./userSlice";
import emailjs from '@emailjs/browser';



function AppointmentForm({physicalTherapist, setShowScheduleAppointment, setShowConfirmation , givenConfirmationInfo, keysToSimplyPT, appointmentInfo, setAppointmentInfo}) {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [errors, setErrors] = useState([]);

  function appointmentChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setAppointmentInfo({
      ...appointmentInfo,
      [name]: value,
    });
  }


  const appointmentSubmit = (e) => {
    e.preventDefault();

    const newAppointmentInfo = {
      patient_id: user.id,
      physical_therapist_id: physicalTherapist.id,
      date: appointmentInfo.date,
      time: appointmentInfo.time
    }

    const newConfirmationInfo = {
      patient_info: user,
      pt_info: physicalTherapist,
      date: appointmentInfo.date,
      time: appointmentInfo.time
    }

    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppointmentInfo),
      }).then((r) => {
        if (r.ok) {
        r.json().then((newAppointmentInfo) => {
          dispatch(addAppointment(newAppointmentInfo))
          dispatch(addPhysicalTherapist(physicalTherapist))
          setShowScheduleAppointment(false)
          setShowConfirmation(true)

          emailjs.send(`${keysToSimplyPT.email_service}`, "template_kvqnewo", newConfirmationInfo, `${keysToSimplyPT.email_key}`)
            .then(res => {
              console.log("Success", res)
            }, error => {
              console.log("Failed...", error)
            })
        
          
        })
        } else {
          r.json().then((err) => {
            console.log(err)
            setErrors(err.error)
          });
        }

      }
    
    );

    givenConfirmationInfo(newConfirmationInfo)

  };

  let today = new Date().toISOString().split('T')[0];


  return (

    <div className="appointmentFormDiv">
      <br/>
      <h2>Fill Out Appointment Form</h2>
      <br/>
      <form onSubmit={appointmentSubmit}>

        <label htmlFor="physical_therapist_name" className="appointmentFormPtLabel">Physical Therapist Name: <input type="text" name="physical_therapist_name" readOnly value={physicalTherapist.name} /> </label>
        
        <br/>
        <br/>

        <label htmlFor="date">Date: <input type="date" name="date" min={today} onChange={appointmentChange} /></label>
        
        <br/>
        <br/>

        <label htmlFor="time">Time:&nbsp;  
          <select name="time" onChange={appointmentChange} >
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
        </label>
  

        <br/>
        <br/>

        {errors.map((err) => (<h6 key={err}>{err}</h6>))}

        <br/>
        <button className="buttonEffect" id="appointmentFormButton">Book Appointment</button>

      </form>
      <br/>
      <br/>
    </div>
  );
}


export default AppointmentForm;