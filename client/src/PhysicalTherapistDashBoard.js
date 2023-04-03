import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectErrors, userUpdate } from "./userSlice";
import ExerciseForm from "./ExerciseForm";
import { fetchAppointments } from "./appointmentSlice";



function PhysicalTherapistDashBoard() {

  const [exerciseKey, setExerciseKey] = useState("")

  useEffect(() => {

    fetch("/exercise_key")
      .then(response => response.json())
      .then(data => setExerciseKey(data))
        
  }, []);

  // console.log(exerciseKey)

  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(fetchAppointments());
        
  }, [dispatch]);

  // const [patientProfiles, setPatientProfiles] = useState([])

  // useEffect(() => {

  //   fetch("/patient_profiles").then((res) => {
  //     if (res.ok) {
  //       res.json().then((profiles) => setPatientProfiles(profiles));
  //     }
  //   });

    
  // }, []);

  // console.log(patientProfiles)

  const user = useSelector(selectUser);

  const userErrors = useSelector(selectErrors);

  console.log(user)
  // console.log(user.appointments)
  // console.log(user.patients)

  // const dispatch = useDispatch();

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



  // console.log(appointmentInfo)

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


  const appointmentInfo = useSelector((state) => state.appointments.entities);

  console.log(appointmentInfo)

  const showInfo = appointmentInfo.filter(pts => pts.physical_therapist_id === user.id);

  console.log(showInfo)


  // appts but yea
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

  console.log(removeDuplicates(showInfo))

  

  // calcuate age

  const showAllPatientsInfo = removeDuplicates(showInfo).map((patientInfo) => {
    // console.log(patient)
    return(
    <div key={patientInfo.patient_id}>
      <img src={patientInfo.patient.image} alt="patientImage" width="150px" height="150px"/>
      <p>Name: {patientInfo.patient.name}</p>
      <p>Email: {patientInfo.patient.email}</p>
      <p>Phone: {patientInfo.patient.patient_profile.phone}</p>
      <p>DOB: {patientInfo.patient.patient_profile.dob}</p>
      <p>Sex: {patientInfo.patient.patient_profile.sex}</p>
      <p>Muscle Injury: {patientInfo.patient.patient_profile.muscle_injury}</p>
      <button value={patientInfo.patient_id} name={patientInfo.patient.patient_profile.muscle_injury} onClick={assignExercises}>Assign Exercises 💪🏽🦵🏼🦶🏿</button>
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

      {showExerciseForm ? <ExerciseForm patientId={patientId} muscleInjury={muscleInjury} setShowExerciseForm={setShowExerciseForm} exerciseKey={exerciseKey}/> : " "}
      

      
    </>
  );
}


export default PhysicalTherapistDashBoard;