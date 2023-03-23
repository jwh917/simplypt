import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectErrors, userUpdate } from "./userSlice";
import { profileUpdate, profileSelectErrors } from "./profileSlice";
import ScheduleAppointment from "./ScheduleAppointment";
import NewConfirmationInfo from "./NewConfirmationInfo";





function PatientDashBoard() {

  const user = useSelector(selectUser);

  const userErrors = useSelector(selectErrors);

  const profileErrors = useSelector(profileSelectErrors);

  const dispatch = useDispatch();

  // console.log(user)

  const {username, name, email, image} = user

  const {id, dob, address, phone, sex, muscle_injury} = user.patient_profile

  // const [showConfirm, setShowConfirm] = useState(false);

  const [showScheduleAppointment, setShowScheduleAppointment] = useState(false);

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [confirmationInfo, setConfirmationInfo] = useState("");

  function givenConfirmationInfo(info){
    setConfirmationInfo(info)
  }
  
  // const handleClick = () => {
  //   setShowConfirm(true);
  // };

  const handleAppClick = () => {
    setShowScheduleAppointment(true);
  };

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


  // DISPATCH  
  // PATCH
  // Update User Info 
  // Update User Profile


  function handleSubmitUser(e) {
    e.preventDefault();

    dispatch(userUpdate(userInput));

  }

  function handleSubmitProfile(e) {
    e.preventDefault();
    
    dispatch(profileUpdate(newProfileInput));

  }

  // DELETE USER







  // Appointments





  return (
    <>
      <h1>Patient DashBoard</h1>

      {/* <span>
        {showConfirm ? (
        <div>
          <p>Are you sure you want to delete your account?</p>
          <button >Confirm</button>
          <br/>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
        ) : (
        <button onClick={handleClick}>Delete Account</button>
        )}
      </span>  */}
    

      <h2>Patient User Info</h2>

      {/* user image */}
      <img src={image} alt="PatientPic" width="250px" height="250px"/>


      <form onSubmit={handleSubmitUser}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" name="username" value={userInput.username} onChange={inputOnChangeUser}/>

        <label htmlFor="name">Name</label>
        <input type="name" placeholder="Name" name="name" value={userInput.name} onChange={inputOnChangeUser}/>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" name="email" value={userInput.email} onChange={inputOnChangeUser}/>

        <label htmlFor="type">Type</label>
        <select name="type" onChange={inputOnChangeUser}>
          <option value="Patient">Patient</option>
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


      <h2>Patient Profile Info</h2>

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
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="chest">chest</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lower back">lower back</option>
          <option value="middle back">middle back</option>
          <option value="neck">neck</option>
          <option value="quadriceps">quadriceps</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
        </select>

        <button>Edit Profile Info</button>

        {profileErrors.map((err) => (<h6 key={err}>{err}</h6>))}


      </form>

      <br/>
      <br/>
      <br/>

      <h3>Appointments and Visits</h3>
      <button onClick={handleAppClick}>Schedule an Appointment</button>
      {showScheduleAppointment ? <ScheduleAppointment setShowScheduleAppointment={setShowScheduleAppointment} setShowConfirmation={setShowConfirmation} givenConfirmationInfo={givenConfirmationInfo}/> : "" }
      {showConfirmation ? <NewConfirmationInfo setShowConfirmation={setShowConfirmation} confirmationInfo={confirmationInfo}/> : "" }
      
      <h4>Upcoming Visits</h4>
      <h4>Past Visits</h4>


      <br/>
      <br/>
      <br/>

      <h3>Physical Therapists</h3>
      
      <h3>Exercises</h3>


    </>
  );
}


export default PatientDashBoard;