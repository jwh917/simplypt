import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userUpdate, userLogout, deleteUser } from "./userSlice";
import { profileUpdate } from "./profileSlice";
import ScheduleAppointment from "./ScheduleAppointment";
import NewConfirmationInfo from "./NewConfirmationInfo";
import UpcomingVisits from "./UpcomingVisits";
import { fetchPTs } from "./ptsSlice";





function PatientDashBoard({keysToSimplyPT}) {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPTs());
  }, [dispatch]);


  // console.log(user)
  // console.log(uploadPreset.upload_preset)
  // console.log(cloudName.cloud_name)

  // console.log(user.appointments)

  const {username, name, email, image} = user

  const {id, dob, address, phone, sex, muscle_injury} = user.patient_profile

  const [showScheduleAppointment, setShowScheduleAppointment] = useState(false);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [confirmationInfo, setConfirmationInfo] = useState("");

  function givenConfirmationInfo(info){
    setConfirmationInfo(info)
  }
  

  const handleAppClick = () => {
    setShowScheduleAppointment(true);
  };

  const [profilePic, setProfilePic] = useState("")

  const [userInput, setUserInput] = useState({
    username: username,
    password: "",
    password_confirmation: "",
    name: name,
    email: email,
    type: "Patient",
    image: image
  });

    // console.log(userInput)


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


  const [newProfileInput, setNewProfileInput] = useState({
    id: id,
    patient_id: user.id,
    dob: dob,
    address: address,
    phone: phone,
    sex: sex,
    muscle_injury: muscle_injury
  });

  // console.log(newProfileInput)


  function inputOnChangeProfile(e) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name)
    // console.log(value)
    setNewProfileInput({
      ...newProfileInput, //spreading the newProfileInput
      [name]: value, //inserting the name and value the user typed in
    })
  }


  function handleSubmitUser(e) {
    e.preventDefault();

    if (userInput.image !== profilePic){

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
          // console.log(data)
        // setUrl(data.url)
        // setUserInput(
        //   {...userInput, image: data.url}
        //   )
          dispatch(userUpdate({...userInput, image: data.url}));
        })
        .catch(err => console.log(err))
    }
    else {
      dispatch(userUpdate(userInput));
    }

  }

  function handleSubmitProfile(e) {
    e.preventDefault();
    
    dispatch(profileUpdate(newProfileInput));

  }


  // const allPTs = user.physical_therapists.map

  // {user.physicaltherapists}
  // const allPTs = [...new Set(user.physical_therapists)]; 

  const allPTs = Array.from(new Set(user.physical_therapists.map(a => a.id))).map(id => {
    return user.physical_therapists.find(a => a.id === id)
  })

  // console.log(allPTs)
  const showAllPTS = allPTs.map((pt) => (
    <div key={pt.id}>
      <img style={{height:"100px", width:"100px"}} src={pt.image} alt="pt" />
      <p>Name: {pt.name}</p>
      <p>Email: {pt.email}</p>
    </div>
  ))

  
  // console.log(user.exercises)

  const exercises = Array.from(new Set(user.exercises.map(obj => obj.name))).map(name => {
    return user.exercises.find(obj => obj.name === name);
  });

  // console.log(exercises)

  const allExercises = exercises.map((exercise) => {
    return (
      <div key={exercise.id}>
        <p><u>Exercise given by PT {exercise.physical_therapist_name} </u></p>
        <img src={exercise.gifurl} alt="exercise.gifUrl" width="150px" height="150px"/>
        <p>Name: {exercise.description}</p>
        <p>Muscle: {exercise.muscle}</p>
        <p>Equipment Needed: {exercise.equipment}</p>
      </div>
    )

  })


  // DELETE USER

  const [showConfirm, setShowConfirm] = useState(false);


  const handleClick = () => {
    setShowConfirm(true);
  };


  function handleDeleteUser() {

    dispatch(userLogout());

    dispatch(deleteUser());    

  }


  // Appointments


  return (
    <>
      <h1><u>Patient DashBoard</u></h1>

    
    

      <h3><u>Patient User Info</u></h3>

      {/* user image */}
      <img src={image} alt="PatientPic" width="150px" height="150px"/>


      <form onSubmit={handleSubmitUser}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser}/>

        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser}/>

        <label htmlFor="type">Type</label>
        <select name="type">
          <option value="Patient">Patient</option>
        </select>

        {/* <label htmlFor="image">Image</label>
        <input name="image" type="file" onChange={inputOnChangeUser} /> */}

        <label htmlFor="profilePic">Profile Picture: <input name="profilePic" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} /> </label>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser}/>

        <label htmlFor="passwordConformation">Password Conformation</label>
        <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser}/>

        <button type="submit"> Edit User Info </button>

      </form>

      <br/>

      <span>
        {showConfirm ? (
        <div>
          <p>Are you sure you want to delete your account?</p>
          <button onClick={handleDeleteUser} >Confirm</button>
          <br/>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
        ) : (
        <button onClick={handleClick}>Delete Account</button>
        )}
      </span> 


      <h3><u>Patient Profile Info</u></h3>

      <form onSubmit={handleSubmitProfile}>

        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob" name="dob" value={newProfileInput.dob} onChange={inputOnChangeProfile} />

        <label htmlFor="address">Address:</label>
        <input type="text" placeholder="Address" id="address" name="address" value={newProfileInput.address} onChange={inputOnChangeProfile}/>

        <label htmlFor="phone">Phone number:</label>
        <input type="tel" id="phone" name="phone" value={newProfileInput.phone} onChange={inputOnChangeProfile}/>
        <small>Format: 123-456-7890</small>


        <fieldset data-role="controlgroup">
        <legend>Choose your gender:</legend>
          <label htmlFor="male">Male</label>
          <input type="radio" name="sex" id="male" value="male" defaultChecked={sex === "male"} onChange={inputOnChangeProfile}/> 
          <label htmlFor="female">Female</label>
         <input type="radio" name="sex" id="female" value="female" defaultChecked={sex === "female"} onChange={inputOnChangeProfile}/>
        </fieldset>

        <label htmlFor="muscle_injury">Muscle Injury:</label>
        <select name="muscle_injury" value={newProfileInput.muscle_injury} onChange={inputOnChangeProfile}>
          <option value="abductors">abductors</option>
          <option value="abs">abs</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="cardiovascular%20system">cardiovascular system</option>
          <option value="delts">delts</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="levator%20scapulae">levator scapulae</option>
          <option value="pectorals">pectorals</option>
          <option value="quads">quads</option>
          <option value="serratus%20anterior">serratus anterior</option>
          <option value="spine">spine</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
          <option value="upper%20back">upper back</option>
        </select>

        <button>Edit Profile Info</button>

      </form>

      <br/>
      <br/>
      <br/>

      <h2><u>Appointments and Visits</u></h2>
      <button onClick={handleAppClick}>Schedule an Appointment</button>
      {showScheduleAppointment ? <ScheduleAppointment setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo}/> : "" }
      {showConfirmation ? <NewConfirmationInfo setShowConfirmation={setShowConfirmation} confirmationInfo={confirmationInfo}/> : "" }
      
      <br/>
      <br/>

      <h2><u>Upcoming Visits</u></h2>
      {/*before current date order and date order */}
      {user.appointments.length === 0 ? <h4>No Upcoming Visits Scheduled</h4> : ""}
      <UpcomingVisits/>


      <br/>
      <br/>
      {/* <h2><u>Past Visits</u></h2> */}
      {/* if pasted current date order */}



      <h2><u>Physical Therapists</u></h2>
      {user.physical_therapists.length === 0 ? <h4>No Treaments By Any Physical Therapists</h4> : ""}

      {showAllPTS}


      <br/>
      <br/>

      
      <h2><u>Exercises</u></h2>
      {exercises.length === 0 ? <h4>0 Exercises Available</h4> : <h4>{exercises.length} Exercises Available</h4>}
      {allExercises}


    </>
  );
}


export default PatientDashBoard;