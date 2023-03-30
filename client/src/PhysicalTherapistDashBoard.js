import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectErrors, userUpdate } from "./userSlice";
import ExerciseForm from "./ExerciseForm";


function PhysicalTherapistDashBoard() {

  const user = useSelector(selectUser);

  const userErrors = useSelector(selectErrors);

  // console.log(user)
  // console.log(user.appointments)
  // console.log(user.patients)

  const dispatch = useDispatch();

  const {username, name, email, image} = user


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
    // console.log(name)
    // console.log(value)
    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
    // e.target.reset();
  }


  function handleSubmitUser(e) {
    e.preventDefault();

    dispatch(userUpdate(userInput));
  }


  function showPatientInfo(appt){
    const patientInfo = user.patients.find((patient) => patient.id === appt.patient_id)
    return patientInfo.name
  }

  const showAllAppts = user.appointments.map((appt) => (
    <div key={appt.id}>
      <p>Date: {appt.date}</p>
      <p>Time: {appt.time}</p>
      <p>Patient: {showPatientInfo(appt)}</p>
      <p>___________________</p>
    </div>
  ))



  const allProfiles = useSelector((state) => state.patient_profile.entities);

  // console.log(allProfiles)

  // Remove Duplicates from an Array of Objects
  const uniqueIds = [];
  
  const unique = user.patients.filter(element => {
    const isDuplicate = uniqueIds.includes(element.id);
  
    if (!isDuplicate) {
      uniqueIds.push(element.id);
  
      return true;
    }
  
    return false;
  });

  // console.log(uniqueIds)
  // console.log(unique)

  const allPatientsInfo = unique.map((patient) => {
    let patientObj = {...patient}

    // eslint-disable-next-line
    allProfiles.map((profile) => {
      if(profile.patient_id === patient.id){
        patientObj = {...patientObj, profile}
      }

    })

    return patientObj

  })

  const [showExerciseForm, setShowExerciseForm] = useState(false)

  const [patientId, setPatientId] = useState(0)
  const [muscleInjury, setMuscleInjury] = useState("")

  // state for 
  // patient id
  // muscle injury
 

  function assignExercises(e){
    setPatientId(e.target.value)
    setMuscleInjury(e.target.name)
    setShowExerciseForm(true)
  }


  // console.log(allPatientsInfo)
  // calcuate age

  const showAllPatientsInfo = allPatientsInfo.map((patient) => {
    // console.log(patient)
    return(
    <div key={patient.id}>
      <img src={patient.image} alt="patientImage" width="150px" height="150px"/>
      <p>Name: {patient.name}</p>
      <p>Email: {patient.email}</p>
      <p>Phone: {patient.profile.phone}</p>
      <p>DOB: {patient.profile.dob}</p>
      <p>Sex: {patient.profile.sex}</p>
      <p>Muscle Injury: {patient.profile.muscle_injury}</p>
      <button value={patient.id} name={patient.profile.muscle_injury} onClick={assignExercises}>Assign Exercises 💪🏽🦵🏼🦶🏿</button>
      {/* opens up excerises from api  */}
      {/* PT pick one and it is posted/created for a patient */}
      <p>___________________</p>
    </div>
  )

  })

  




  return (
    <>
      <h1><u>Physical Therapist DashBoard</u></h1>

      <h3><u>Physical Therapist Info</u></h3>

      {/* user image */}
      <img src={image} alt="TherapistPic" width="150px" height="150px"/>


      <form onSubmit={handleSubmitUser}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser}/>

        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser}/>

        <label htmlFor="type">Type</label>
        <select name="type">
          <option value="PhysicalTherapist">Physical Therapist</option>
        </select>

        <label htmlFor="image">Image</label>
        <input name="image" type="file" onChange={inputOnChangeUser} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser}/>

        <label htmlFor="passwordConformation">Password Conformation</label>
        <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser}/>

        <button type="submit"> Edit User Info </button>

        {userErrors.map((err) => (<h6 key={err}>{err}</h6>))}

      </form>

      <h2><u>Appointments</u></h2>
      {user.appointments.length === 0 ? <h4>No Appointments Schedule</h4> : ""}
      {showAllAppts}

      <h2><u>Patients</u></h2>
      {user.patients.length === 0 ? <h4>No Patients Have Appointments</h4> : ""}
      {showAllPatientsInfo}

      {showExerciseForm ? <ExerciseForm patientId={patientId} muscleInjury={muscleInjury} setShowExerciseForm={setShowExerciseForm}/> : " "}
      

      
    </>
  );
}


export default PhysicalTherapistDashBoard;