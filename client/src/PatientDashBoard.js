import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userUpdate, userLogout, deleteUser } from "./userSlice";
import { profileUpdate } from "./profileSlice";
import ScheduleAppointment from "./ScheduleAppointment";
import NewConfirmationInfo from "./NewConfirmationInfo";
import UpcomingVisits from "./UpcomingVisits";
import { fetchPTs } from "./ptsSlice";
import HorizontalScroll from 'react-horizontal-scrolling'





function PatientDashBoard({keysToSimplyPT}) {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPTs());
  }, [dispatch]);


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



  function inputOnChangeUser(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
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



  function inputOnChangeProfile(e) {
    const name = e.target.name;
    const value = e.target.value;

    setNewProfileInput({
      ...newProfileInput, //spreading the newProfileInput
      [name]: value, //inserting the name and value the user typed in
    })
  }


  function handleSubmitUser(e) {
    e.preventDefault();

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
        })
        .catch(err => console.log(err))
    }
    else {
      dispatch(userUpdate(userInput))
      alert("User Info Has Been Updated")
    }
  }

  function handleSubmitProfile(e) {
    e.preventDefault();
    dispatch(profileUpdate(newProfileInput));

    alert("User Profile Info Has Been Updated")
  }


  const allPTs = Array.from(new Set(user.physical_therapists.map(a => a.id))).map(id => {
    return user.physical_therapists.find(a => a.id === id)
  })

  const showAllPTS = allPTs.map((pt) => (
    <div key={pt.id} className="dashBoard" style={{color: "white", border: "2px solid rgba(255,255,255,0.1)", textAlign: "center", borderRadius: "20px", padding: "10px", marginLeft: "20px"}}>
      <p><u>Name:</u> {pt.name}</p>
      <img style={{height:"100px", width:"100px", borderRadius: "20px"}} src={pt.image} alt="pt" />
      <br/>
      <br/>
      <p><u>Email:</u> {pt.email}</p>
    </div>
  ))

  
  const exercises = Array.from(new Set(user.exercises.map(obj => obj.name))).map(name => {
    return user.exercises.find(obj => obj.name === name);
  });


  const allExercises = exercises.map((exercise) => {
    return (
      <div key={exercise.id} className="dashBoard" style={{ color:"white", border: "2px solid white", borderRadius: "20px", padding: "5px", textAlign: "center", marginLeft: "25px", wordWrap: "break-word", width: "200px"}}>
        <p><u>Exercise given by PT {exercise.physical_therapist_name} </u></p>
        <img src={exercise.gifurl} alt="exercise.gifUrl" width="150px" height="150px" style={{borderRadius: "20px"}}/>
        <p>Name: {exercise.description}</p>
        <p>Muscle: {exercise.muscle}</p>
        <p>Equipment Needed: {exercise.equipment}</p>
      </div>
    )

  })


  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };


  function handleDeleteUser() {
    dispatch(userLogout());
    dispatch(deleteUser());    
  }


  return (
    <>
      <br/>
      <br/>

      <h1><u>Patient DashBoard</u></h1>

      <br/>
    
      <div style={{backgroundColor: "darkgray", width: "450px", borderTop: "2px solid rgba(255,255,255,0.1)", borderRight: "2px solid rgba(255,255,255,0.1)", borderBottom: "2px solid rgba(255,255,255,0.1)", borderRadius: "0px 20px 20px 0px", boxShadow: "0 0 40px rgba(8,7,16,0.6)", letterSpacing: "0.5px", color: "white" }}>
        <br/>
        <h3 style={{marginLeft: "105px"}}><u>Patient User Info</u></h3>
        <br/>

        <img src={image} alt="PatientPic" width="150px" height="150px" style={{marginLeft: "130px", border: "3px solid black", padding: "5px"}}/>

        <br/>
        <br/>

        <span>  
          {showConfirm ? (
          <div>
            <p style={{marginLeft: "35px", color: "red"}}>Are you sure you want to delete your account?</p>
            <button className="buttonEffect" onClick={handleDeleteUser} style={{marginLeft: "170px", backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px", color: "red"}}>Confirm</button>
            <br/>
            <br/>
            <button className="buttonEffect" onClick={() => setShowConfirm(false)} style={{marginLeft: "175px", backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}>Cancel</button>
          </div>
          ) : (
          <button className="buttonEffect" onClick={handleClick} style={{marginLeft: "130px", backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "40px", color: "red"}}>Delete Account</button>
          )}
        </span> 

        <br/>
        <br/>

        <div style={{display: "flex", textAlign: "center", width: "50px"}}>

          <form onSubmit={handleSubmitUser}>
            <label htmlFor="username" style={{fontSize: "18px"}}> <b>Username:</b> <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="name" style={{fontSize: "18px"}}> <b>Name:</b> <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="email" style={{fontSize: "18px"}}> <b>Email:</b> <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            

            <label htmlFor="type" style={{fontSize: "18px"}}> <b>Type:</b>
              <select name="type">
              <option value="Patient">Patient</option>
              </select>
            </label> <br/> <br/>

            <label htmlFor="image" style={{fontSize: "18px", marginLeft: "-10px"}}> <b>Image:</b> <input name="image" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} style={{marginLeft: "80px", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>

            <label htmlFor="password" style={{fontSize: "18px"}}> <b>Password:</b> <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>
            
            <label htmlFor="passwordConformation" style={{fontSize: "18px"}}><b>Password Conformation:</b> <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label>
            
            <br/>
            <br/>
            <button className="buttonEffect" type="submit" style={{backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}> Edit User Info </button>
            <br/>

          </form>
        </div>

        <br/> 
        <hr style={{border: "3px solid black"}}/> 
        <br/> 

        <h3 style={{marginLeft: "110px"}}><u>Patient Profile Info</u></h3>
        <br/>

        <div style={{display: "flex", textAlign: "center", width: "50px", marginLeft: "110px"}}>

          <form onSubmit={handleSubmitProfile}>

            <label htmlFor="dob" style={{fontSize: "18px"}}>DOB: <br/> <input type="date" id="dob" name="dob" value={newProfileInput.dob} onChange={inputOnChangeProfile} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/> <br/>

            <label htmlFor="address" style={{fontSize: "18px"}}>Address: <input type="text" placeholder="Address" id="address" name="address" value={newProfileInput.address} onChange={inputOnChangeProfile} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> <br/> <br/>

            <label htmlFor="phone" style={{fontSize: "18px"}}>Phone number: <br/>
              <input type="tel" id="phone" name="phone" value={newProfileInput.phone} onChange={inputOnChangeProfile} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/>
              <small>Format: 123-456-7890</small>
            </label> <br/> <br/>
         
            <fieldset data-role="controlgroup">
            <legend>Choose your gender:</legend>
              <label htmlFor="male" style={{fontSize: "18px"}}>Male <input type="radio" name="sex" id="male" value="male" defaultChecked={sex === "male"} onChange={inputOnChangeProfile} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/> </label> &nbsp;
              <label htmlFor="female" style={{fontSize: "18px"}}>Female <input type="radio" name="sex" id="female" value="female" defaultChecked={sex === "female"} onChange={inputOnChangeProfile} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label>
            </fieldset> <br/>

            <label htmlFor="muscle_injury" style={{fontSize: "18px"}}>Muscle Injury:

             <select name="muscle_injury" value={newProfileInput.muscle_injury} onChange={inputOnChangeProfile}  style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}>
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
            
            </label> <br/> <br/>
      
            <button className="buttonEffect" style={{backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}>Edit Profile Info</button>
            
            <br/> 
            <br/> 
          </form>

        </div>

      </div>

      <br/>
      <br/>
      <br/>

      <div style={{display: "grid", gap: "50px", padding: "5px", marginLeft: "600px", marginTop: "-1600px"}}>

        <div style={{backgroundColor: "darkgray", borderRadius: "20px", padding: "15px", width: "50em", height: "100%", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
          <h2 style={{color: "white"}}><u>Physical Therapists</u></h2>
          <br/>
          {user.physical_therapists.length === 0 ? <h4 style={{color: "white"}}>No Treaments By Any Physical Therapists</h4> : ""}


          <HorizontalScroll reverseScroll={true}>
            {showAllPTS}
          </HorizontalScroll>

        </div>
        
        <br/>

        <div style={{backgroundColor: "darkgray", borderRadius: "20px", padding: "15px", width: "50em", height: "100%", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>
          <h2 style={{color: "white"}}><u>Exercises</u></h2>
          <br/>
          {exercises.length === 0 ? <h4 style={{color: "white"}}>0 Exercises Available</h4> : <h4 style={{color: "white"}}>{exercises.length} Exercises Available</h4>}

          <br/>

          <HorizontalScroll reverseScroll={true}>
            {allExercises}
          </HorizontalScroll>

        </div>

        <br/>
        <br/>

        <div>
          <h2><u>Appointments and Visits</u></h2>
          <br/>
          <button className="buttonEffect" onClick={handleAppClick} style={{backgroundColor: "#b0bec5", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}>Schedule an Appointment</button>
          {showScheduleAppointment ? <ScheduleAppointment setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo}/> : "" }
          {showConfirmation ? <NewConfirmationInfo setShowConfirmation={setShowConfirmation} confirmationInfo={confirmationInfo}/> : "" }
        </div>

        <br/>
  
          <div style={{backgroundColor: "darkgray", borderRadius: "20px", padding: "15px", width: "500px", height: "100%", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)", marginLeft: "125px"}}>
            <h2 style={{color: "white", textAlign: "center"}}><u>Upcoming Visits</u></h2>
            {user.appointments.length === 0 ? <h4 style={{color: "white"}}>No Upcoming Visits Scheduled</h4> : ""}
            <br/>

              <div style={{display: "flex", justifyContent: "space-around"}}>
                <UpcomingVisits/>
              </div>

          </div>
        </div>

      <br/>
      <br/>

    </>
  );
}


export default PatientDashBoard;


