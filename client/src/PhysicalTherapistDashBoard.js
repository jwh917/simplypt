import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userUpdate } from "./userSlice";
import ExerciseForm from "./ExerciseForm";
import { fetchAppointments } from "./appointmentSlice";
import HorizontalScroll from 'react-horizontal-scrolling'
import our_clinic from './our_clinic.png'; 

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RecommendEquipmentSearch from "./RecommendEquipmentSearch";



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
            dispatch(userUpdate({...userInput}))
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
    <div key={appt.id} className="ptDashBoardItem" >
      <p>Date: {appt.date}</p>
      <p>Time: {appt.time}</p>
      <p>Patient: {showPatientInfo(appt)}</p>
    </div>
  ))


  const [showExerciseForm, setShowExerciseForm] = useState(false)

  const [patientId, setPatientId] = useState(0)
  const [muscleInjury, setMuscleInjury] = useState("")

  const [showRecommendEquipmentSearch, setShowRecommendEquipmentSearch] = useState(false)


  function assignExercises(e){
    setPatientId(e.target.value)
    setMuscleInjury(e.target.name)
    setShowExerciseForm(true)
  }


  function ptRecommendEquipment(e){
    setPatientId(e.target.value)
    setShowRecommendEquipmentSearch(true)
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
    <div key={patientInfo.patient_id} className="showAllPatientsInfo" >
      <div className="showAllPatientsCard">
        <br/>

        <Image src={patientInfo.patient.image} alt="patientImage" width="150px" height="150px" />
        
        <br/>
        <br/>

        <p>Name: {patientInfo.patient.name}</p>
        <p>Email: {patientInfo.patient.email}</p>
        <p>Phone: {patientInfo.patient.patient_profile.phone}</p>
        <p>DOB: {patientInfo.patient.patient_profile.dob}</p>
        <p>Sex: {patientInfo.patient.patient_profile.sex}</p>
        <p>Muscle Injury: {patientInfo.patient.patient_profile.muscle_injury}</p>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <button className="buttonEffect1" value={patientInfo.patient_id} name={patientInfo.patient.patient_profile.muscle_injury} onClick={assignExercises} id="showAllPatientsButton">Assign Exercises <br/> 💪🏽🦵🏼🦶🏿</button> 
          </Col>
          <Col xs lg="6">
            <button className="buttonEffect1" value={patientInfo.patient_id} name={patientInfo.patient.patient_profile.muscle_injury} onClick={ptRecommendEquipment} id="showAllPatientsButton">Recommend Equipment <br/> 🪢🩼🩹</button>
          </Col>
        </Row>

    

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

      <div className="row" id="ptDashBoardDiv0">
        <div className="col-md-4">

          <div id="ptDashBoardDiv1">
            <br/>
            <h3 ><u>Physical Therapist Info</u></h3>
            <br/>

            <Image src={image} alt="TherapistPic" fluid="true" /> 

            <br/>
            <br/>
            
            <form onSubmit={handleSubmitUser} className="userForm">
              <label htmlFor="username" > <b>Username:</b> <br/> <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser} /> </label> <br/> <br/>
                

              <label htmlFor="name" > <b>Name:</b> <br/> <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser} /> </label> <br/> <br/>
                

              <label htmlFor="email" > <b>Email:</b> <br/> <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser} /> </label> <br/> <br/>
                

              <label htmlFor="type" > <b>Type:</b> <br/>
                <select name="type">
                  <option value="PhysicalTherapist">Physical Therapist</option>
                </select>
              </label> <br/> <br/>
            

              <label htmlFor="image" > <b>Image:</b> <br/> <input name="image" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} /> </label> <br/> <br/>

              <label htmlFor="password" > <b>Password:</b> <br/> <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser} /> </label> <br/> <br/>
                
              <label htmlFor="passwordConformation" ><b>Password Conformation:</b> <br/> <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser} /> </label>
                
              <br/>
              <br/>
              <button type="submit" className="buttonEffect" > Edit User Info </button>
              <br/>
              <br/>

                {errors.map((err) => (<h6 key={err}>{err}</h6>))}

            </form>

          </div>

          <br/>
          <br/>
          <br/>


        </div>

        <div className="col-md-6 offset-md-2">

          <div id="ptDashBoardDiv2">
            <h2><u>Appointments</u></h2>
            {user.appointments.length === 0 ? <h4 style={{color: "white"}}>No Appointments Schedule</h4> : ""}

            <br/>

            <div>
              <HorizontalScroll reverseScroll={true}>
                {showAllAppts}
              </HorizontalScroll>
            </div>
            

          </div>
          <br/>
          <br/>

          <Image src={our_clinic} alt="our_clinic" fluid="true" className="ptDashBoardImg"/> 

          <br/>
          <br/>
          <br/>     

          <h2 className="ptDashBoardHeader"><u>Patients</u></h2>
          {user.patients.length === 0 ? <h4 style={{textAlign: "center"}}>No Patients Have Appointments</h4> : ""}


          <br/>
          <br/>

          <div>
            <div>
              <HorizontalScroll reverseScroll={true}>
                {showAllPatientsInfo}
              </HorizontalScroll>
            </div>  
          </div>
      
          <br/>
          <br/>
          <br/>

          {showExerciseForm ? <ExerciseForm patientId={patientId} muscleInjury={muscleInjury} setShowExerciseForm={setShowExerciseForm} keysToSimplyPT={keysToSimplyPT}/> : " "}

          {showRecommendEquipmentSearch ? <RecommendEquipmentSearch patientId={patientId} setShowRecommendEquipmentSearch={setShowRecommendEquipmentSearch}/> : " "}
        
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
}


export default PhysicalTherapistDashBoard;