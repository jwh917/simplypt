import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userUpdate, userLogout, deleteUser } from "./userSlice";
import ScheduleAppointment from "./ScheduleAppointment";
import NewConfirmationInfo from "./NewConfirmationInfo";
import UpcomingVisits from "./UpcomingVisits";
import { fetchPTs } from "./ptsSlice";
import HorizontalScroll from 'react-horizontal-scrolling'


import Image from 'react-bootstrap/Image';




function PatientDashBoard({keysToSimplyPT}) {

  const user = useSelector(selectUser);

  console.log(user)

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

  const [errors, setErrors] = useState([])
  const [profileErrors, setProfileErrors] = useState([])

  
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


  function handleSubmitProfile(e) {
    e.preventDefault();

    fetch(`/patient_profiles/${newProfileInput.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfileInput),
      }).then((r) => {
        if (r.ok) {
        r.json().then((newProfileInput) => {
          setNewProfileInput({...newProfileInput})
          alert("User Profile Info Has Been Updated")
          setProfileErrors([])
        })
        } else {
          r.json().then((err) => setProfileErrors(err))
        }

      })

  }


  const allPTs = Array.from(new Set(user.physical_therapists.map(a => a.id))).map(id => {
    return user.physical_therapists.find(a => a.id === id)
  })

  const showAllPTS = allPTs.map((pt) => (
    <div key={pt.id} className="allPts">
      <p><u>Name:</u> {pt.name}</p>
      <Image src={pt.image} alt="pt" fluid="true" /> 

      <br/>
      <br/>
      <p><u>Email:</u> {pt.email}</p>
    </div>
  ))


  const allExercises = user.exercises.map((exercise) => {
    return (
      <div key={exercise.id} className="dashBoardItem">
        <p><u>Exercise given by PT {exercise.physical_therapist_name} </u></p>
        <Image src={exercise.gifurl} alt="exercise.gifUrl" fluid="true"/> 

        <p>Name: {exercise.description}</p>
        <p>Muscle: {exercise.muscle}</p>
        <p>Equipment Needed: {exercise.equipment}</p>
      </div>
    )

  })


  const allRecommendedEquipment = user.recommended_equipments.map((equipment) => {
    return (
      <div key={equipment.id} className="dashBoardItem">
        
        <p>Name: {equipment.product_name} &nbsp; <i className="bi bi-clipboard" id="clipboard" title={equipment.product_name} onClick={() => {navigator.clipboard.writeText(equipment.product_name)}}></i> </p> 

        <Image src={equipment.product_url} alt="exercise.gifUrl" fluid="true" /> 
        <br/>
        <br/>
        <p>Desc: {equipment.product_description}</p>
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
    
      <div className="row" id="patientDashBoardDiv0">
        <div className="col-md-4">
          <div id="patientDashBoardDiv1">
            <br/>
            <h3><u>Patient User Info</u></h3>
            <br/>

            <Image src={image} alt="PatientPic" fluid="true"/> 


            <br/>
            <br/>
            
            <span>  
              {showConfirm ? (
                <div className="showConfirm">
                  <p>Are you sure you want to delete your account?</p>
                  <button className="buttonEffect" onClick={handleDeleteUser} id="confrimDeleteButton">Confirm</button>
                  <br/>
                  <br/>
                  <button className="buttonEffect" onClick={() => setShowConfirm(false)} id="cancelButton">Cancel</button>
                </div>
              ) : (
                <button className="buttonEffect" onClick={handleClick} id="confrimDeleteButton">Delete Account</button>
              )}
            </span> 

            <br/>
            <br/>


            <form onSubmit={handleSubmitUser} className="userForm">
              <label htmlFor="username" > <b>Username:</b> <br/> <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser} /> </label> <br/> <br/>
            

              <label htmlFor="name" > <b>Name:</b> <br/> <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser} /> </label> <br/> <br/>
            

              <label htmlFor="email" > <b>Email:</b> <br/> <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser} /> </label> <br/> <br/>
            

              <label htmlFor="type" > <b>Type:</b> <br/>
              
                <select name="type">
                  <option value="Patient">Patient</option>
                </select>
              </label> <br/> <br/>

              <label htmlFor="image" > <b>Image:</b> <br/> <input name="image" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])}  /> </label> <br/> <br/>

              <label htmlFor="password" > <b>Password:</b> <br/> <input type="password" placeholder="Password" name="password" onChange={inputOnChangeUser} /> </label> <br/> <br/>
            
              <label htmlFor="passwordConformation" ><b>Password Conformation:</b> <br/> <input type="password" placeholder="Password Confirmation" name="password_confirmation" onChange={inputOnChangeUser} /> </label>
            
              <br/>
              <br/>
              <button className="buttonEffect" type="submit" > Edit User Info </button>
              <br/>
              <br/>

              {errors.map((err) => (<h6 key={err}>{err}</h6>))}

            </form>

            <br/> 
            <hr className="hr"/> 
            <br/> 

            <h3><u>Patient Profile Info</u></h3>
            <br/>

            <form onSubmit={handleSubmitProfile} className="userForm">

              <label htmlFor="dob" >DOB: <br/> <input type="date" id="dob" name="dob" value={newProfileInput.dob} onChange={inputOnChangeProfile} /></label> <br/> <br/>

              <label htmlFor="address" >Address: <br/> <input type="text" placeholder="Address" id="address" name="address" value={newProfileInput.address} onChange={inputOnChangeProfile} /> </label> <br/> <br/>

              <label htmlFor="phone" >Phone number: <br/>
                <input type="tel" id="phone" name="phone" value={newProfileInput.phone} onChange={inputOnChangeProfile} />
                <br/>
                <small>Format: 123-456-7890</small>
              </label> <br/> <br/>
          
              <fieldset data-role="controlgroup">
              <legend>Choose your gender:</legend>
                <label htmlFor="male" >Male <input type="radio" name="sex" id="male" value="male" defaultChecked={sex === "male"} onChange={inputOnChangeProfile} /> </label> &nbsp;
                <label htmlFor="female" >Female <input type="radio" name="sex" id="female" value="female" defaultChecked={sex === "female"} onChange={inputOnChangeProfile} /></label>
              </fieldset> <br/>

              <label htmlFor="muscle_injury" >Muscle Injury: <br/>

              <select name="muscle_injury" value={newProfileInput.muscle_injury} onChange={inputOnChangeProfile}  >
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
        
              <button className="buttonEffect" >Edit Profile Info</button>
              
              <br/> 
              <br/> 

              {profileErrors.map((err) => (<h6 key={err}>{err}</h6>))}

            </form>

          </div>

          <br/> 
          <br/> 
          <br/>


        </div>


  

        <div className="col-md-6 offset-md-2">
          
          <div id="patientDashBoardDiv2">
            <h2 ><u>Physical Therapists</u></h2>
            <br/>
            {user.physical_therapists.length === 0 ? <h4 >No Treaments By Any Physical Therapists</h4> : ""}

            <HorizontalScroll reverseScroll={true}>
              {showAllPTS}
            </HorizontalScroll>

          </div>

          <br/>
          <br/>
          <br/>

          <div id="patientDashBoardDiv2">
            <h2 ><u>Exercises</u></h2>
            <br/>
            {user.exercises.length === 0 ? <h4 >0 Exercises Available</h4> : <h4 >{user.exercises.length} Exercises Available</h4>}

            <br/>

            <HorizontalScroll reverseScroll={true}>
              {allExercises}
            </HorizontalScroll>

            <br/>
            <br/>

            <h2 ><u>Recommendeded Equipment</u></h2>
            <p >-Note: Copy and Paste Equipment Name To The <a href="/store/search">Search Page</a> </p>
            <br/>
            {user.recommended_equipments.length === 0 ? <h4 >0 Recommendeded Equipment Available</h4> : <h4 >{user.recommended_equipments.length} Recommendeded Equipment Available</h4>}

            <HorizontalScroll reverseScroll={true}>
              {allRecommendedEquipment}
            </HorizontalScroll>

          </div>

          <br/>
          <br/>
          <br/>

          <div id="patientDashBoardDiv3">
            <h2><u>Appointments and Visits</u></h2>
            <br/>
            <button className="buttonEffect" onClick={handleAppClick} >Schedule an Appointment</button>
            <br/>
            <br/>
            {showScheduleAppointment ? <ScheduleAppointment setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo}/> : "" }
            {showConfirmation ? <NewConfirmationInfo setShowConfirmation={setShowConfirmation} confirmationInfo={confirmationInfo}/> : "" }
          </div>

          <br/>

          <div id="patientDashBoardDiv4">
            <h2 ><u>Upcoming Visits</u></h2>
            {user.appointments.length === 0 ? <h4 >No Upcoming Visits Scheduled</h4> : ""}
            <br/>

            <div id="patientDashBoardDiv5">
              <UpcomingVisits/>
            </div>

          </div>

          <br/>
          <br/>
          <br/>
        </div>
        
        
      </div>
      <br/>
      <br/>
      <br/>
    </>
  );
}


export default PatientDashBoard;


