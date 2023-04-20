import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addAppointment, addPhysicalTherapist } from "./userSlice";
// import emailjs from '@emailjs/browser';



function AppointmentForm({physicalTherapist, setShowScheduleAppointment, setShowConfirmation , givenConfirmationInfo, keysToSimplyPT, appointmentInfo, setAppointmentInfo}) {

  console.log(physicalTherapist)

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [errors, setErrors] = useState([]);

  // console.log(user)
  // console.log(errors)

  // const allPTs = useSelector((state) => state.pts.entities);

  // const selectedPT = allPTs.find((pt) => pt.name === physicalTherapist)

  // console.log(selectedPT)



  // const [appointmentInfo, setAppointmentInfo] = useState({
  //   patient_id: user.id,
  //   physical_therapist_id: physicalTherapist.id,
  //   date: "",
  //   time: "9 am",
  // });

  console.log(appointmentInfo)


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

    console.log(newConfirmationInfo)

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
          // e.target.reset();
          // givenConfirmationInfo(newConfirmationInfo)

          // emailjs.send(`${keysToSimplyPT.email_service}`, "template_kvqnewo", newConfirmationInfo, `${keysToSimplyPT.email_key}`)
          //   .then(res => {
          //     console.log("Success", res)
          //   }, error => {
          //     console.log("Failed...", error)
          //   })
        
          
        })
        } else {
          r.json().then((err) => {
            console.log(err)
            setErrors(err.error)
            // e.target.reset();

          });
        }

      }
    
    );

    // dispatch(addPhysicalTherapist(selectedPT))
    // setShowScheduleAppointment(false)
    // setShowConfirmation(true)
    givenConfirmationInfo(newConfirmationInfo)

  };

  let today = new Date().toISOString().split('T')[0];


  return (

    <div style={{textAlign: "center", fontSize: "18px", marginLeft: "-90px"}}>
      {/* Appointment times already booked */}
      <br/>
      <h2>Fill Out Appointment Form</h2>
      <br/>
      <form onSubmit={appointmentSubmit}>

        <label htmlFor="physical_therapist_name" style={{marginLeft: "20px"}}>Physical Therapist Name: <input type="text" name="physical_therapist_name" readOnly value={physicalTherapist.name} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label>
        
        <br/>
        <br/>

        <label htmlFor="date">Date: <input type="date" name="date" min={today} onChange={appointmentChange} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label>
        
        <br/>
          {/* Show current date no appointments show next date and already taken appointments on that day and disable the time on time options -  */}
        <br/>

        <label htmlFor="time">Time:
          <select name="time" onChange={appointmentChange} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}>
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
        <button className="buttonEffect" style={{backgroundColor: "#b0bec5", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>Book Appointment</button>

      </form>
    </div>
  );
}


export default AppointmentForm;