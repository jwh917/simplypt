import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userUpdate } from "./userSlice";
import ExerciseForm from "./ExerciseForm";
import { fetchAppointments } from "./appointmentSlice";
import HorizontalScroll from 'react-horizontal-scrolling'
import our_clinic from './our_clinic.png'; 



function PhysicalTherapistDashBoard({ keysToSimplyPT }) {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchAppointments());
        
  }, [dispatch]);


  const user = useSelector(selectUser);

  const [errors, setErrors] = useState([])

  const {username, name, email, image} = user

  const [profilePic, setProfilePic] = useState("")

  const [userInput, setUserInput] = useState({
    username: username,
    password: "",
    password_confirmation: "",
    name: name,
    email: email,
    type: "PhysicalTherapist",
    image: image
  });

  function inputOnChangeUser(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
  }


  function handleSubmitUser(e) {
    e.preventDefault();

    fetch("/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
      }).then((r) => {
        if (r.ok) {
        r.json().then((userInput) => {
          if (profilePic !== ""){

            const data = new FormData()
            data.append("file", profilePic)
            data.append("upload_preset", keysToSimplyPT.upload_preset)
            data.append("cloud_name", keysToSimplyPT.cloud_name)
        
            fetch(`https://api.cloudinary.com/v1_1/${keysToSimplyPT.cloud_name}/image/upload`,{
              method:"post",
              body: data
              })
              .then(resp => resp.json())
              .then(data => {
                dispatch(userUpdate({...userInput, image: data.url}))
                alert("User Info Has Been Updated")
                setErrors([])
              })
          }
          else {
            setUserInput({...userInput})
            alert("User Info Has Been Updated")
            setErrors([])
          }
        })
        } else {
          r.json().then((err) => setErrors(err))
        }

      })
      e.target.reset()
  }


  function showPatientInfo(appt){
    const patientInfo = user.patients.find((patient) => patient.id === appt.patient_id)
    return patientInfo.name
  }

  const showAllAppts = user.appointments.map((appt) => (
    <div key={appt.id} className="dashBoard"  style={{border: "1px solid white", borderRadius: "20px", padding: "5px", width: "150px", height: "115px", marginLeft: "15px", textAlign: "center", color: "white"}}>
      <p>Date: {appt.date}</p>
      <p>Time: {appt.time}</p>
      <p>Patient: {showPatientInfo(appt)}</p>
    </div>
  ))


  const [showExerciseForm, setShowExerciseForm] = useState(false)

  const [patientId, setPatientId] = useState(0)
  const [muscleInjury, setMuscleInjury] = useState("")
 

  function assignExercises(e){
    setPatientId(e.target.value)
    setMuscleInjury(e.target.name)
    setShowExerciseForm(true)
  }


  const appointmentInfo = useSelector((state) => state.appointments.entities);

  const showInfo = appointmentInfo.filter(pts => pts.physical_therapist_id === user.id);

  function removeDuplicates(patients) {
      const uniqueIds = new Set();
      const uniquePatients = [];
      for (const patient of patients) {
        if (!uniqueIds.has(patient.patient_id)) {
          uniqueIds.add(patient.patient_id);
          uniquePatients.push(patient);
        }
      }
      return uniquePatients;
    }


  const showAllPatientsInfo = removeDuplicates(showInfo).map((patientInfo) => {
    return(
    <div key={patientInfo.patient_id} className="dashBoard" style={{ borderRadius: "20px", padding: "5px", textAlign: "center", marginLeft: "50px", width: "300px"}}>
      <div style={{ border: "2px solid rgba(255,255,255,0.1)", borderRadius: "20px", boxShadow: "0 0 10px rgba(8,7,16,0.6)"}}>
        <br/>

        <img src={patientInfo.patient.image} alt="patientImage" width="150px" height="150px" style={{border: "3px solid black", padding: "5px"}}/>
        
        <br/>
        <br/>

        <p>Name: {patientInfo.patient.name}</p>
        <p>Email: {patientInfo.patient.email}</p>
        <p>Phone: {patientInfo.patient.patient_profile.phone}</p>
        <p>DOB: {patientInfo.patient.patient_profile.dob}</p>
        <p>Sex: {patientInfo.patient.patient_profile.sex}</p>
        <p>Muscle Injury: {patientInfo.patient.patient_profile.muscle_injury}</p>
        <button className="buttonEffect1" value={patientInfo.patient_id} name={patientInfo.patient.patient_profile.muscle_injury} onClick={assignExercises} style={{ fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}>Assign Exercises 💪🏽🦵🏼🦶🏿</button>

        <br/>
        <br/>

      </div>
    </div>
    )

  })

  

  return (
    <>
      <br/>
      <br/>

      <h1><u>Physical Therapist DashBoard</u></h1>

      <br/>

      <div style={{backgroundColor: "darkgray", width: "450px", borderTop: "2px solid rgba(255,255,255,0.1)", borderRight: "2px solid rgba(255,255,255,0.1)", borderBottom: "2px solid rgba(255,255,255,0.1)", borderRadius: "0px 20px 20px 0px", boxShadow: "0 0 40px rgba(8,7,16,0.6)", letterSpacing: "0.5px", color: "white" }}>
        <br/>
        <h3 style={{marginLeft: "70px"}}><u>Physical Therapist Info</u></h3>
        <br/>

        <img src={image} alt="TherapistPic" width="150px" height="150px" style={{marginLeft: "130px", border: "3px solid black", padding: "5px"}}/>
        <br/>
        <br/>

        <div style={{display: "flex", textAlign: "center", width: "50px"}}>

          <form onSubmit={handleSubmitUser}>
            <label htmlFor="username" style={{fontSize: "18px"}}> <b>Username:</b> <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="name" style={{fontSize: "18px"}}> <b>Name:</b> <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="email" style={{fontSize: "18px"}}> <b>Email:</b> <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="type" style={{fontSize: "18px"}}> <b>Type:</b>
              <select name="type">
              <option value="PhysicalTherapist">Physical Therapist</option>
              </select>
            </label> <br/> <br/>
        

            <label htmlFor="image" style={{fontSize: "18px", marginLeft: "-10px"}}> <b>Image:</b> <input name="image" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} style={{marginLeft: "80px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>

            <label htmlFor="password" style={{fontSize: "18px"}}> <b>Password:</b> <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            
            <label htmlFor="passwordConformation" style={{fontSize: "18px"}}><b>Password Conformation:</b> <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label>
            
            <br/>
            <br/>
            <button type="submit" className="buttonEffect" style={{backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}> Edit User Info </button>
            <br/>
            <br/>

            {errors.map((err) => (<h6 key={err}>{err}</h6>))}

          </form>
        </div>

      </div>

      <br/>
      <br/>

      <div style={{display: "grid", gap: "50px", padding: "5px", marginLeft: "600px", marginTop: "-650px"}}>

        <div style={{backgroundColor: "darkgray", borderRadius: "20px", padding: "15px", width: "50em", height: "110%", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
          <h2 style={{color: "white"}}><u>Appointments</u></h2>
          {user.appointments.length === 0 ? <h4 style={{color: "white"}}>No Appointments Schedule</h4> : ""}

          <br/>

          <HorizontalScroll reverseScroll={true}>
            {showAllAppts}
          </HorizontalScroll>

        </div>
        <br/>


        <img src={our_clinic} alt="our_clinic" width="450px" height="250px" style={{marginLeft: "130px", borderRadius: "20px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}/>
      </div>

      <br/>
      <br/>
      <br/>     

      <h2 style={{textAlign: "center"}}><u>Patients</u></h2>
      {user.patients.length === 0 ? <h4 style={{textAlign: "center"}}>No Patients Have Appointments</h4> : ""}


      <br/>
      <br/>

      <div style={{display: "flex", justifyContent: "space-around"}}>

        <HorizontalScroll reverseScroll={true}>
          {showAllPatientsInfo}
        </HorizontalScroll>

      </div>
  
      <br/>
      <br/>
      <br/>

      {showExerciseForm ? <ExerciseForm patientId={patientId} muscleInjury={muscleInjury} setShowExerciseForm={setShowExerciseForm} keysToSimplyPT={keysToSimplyPT}/> : " "}
      
    </>
  );
}


export default PhysicalTherapistDashBoard;