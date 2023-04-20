import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, fetchUser } from "./userSlice";
import Login from "./Login";
import ProfileForm from "./ProfileForm";
import PatientDashBoard from "./PatientDashBoard";
import PhysicalTherapistDashBoard from "./PhysicalTherapistDashBoard";
import { fetchProfiles } from "./profileSlice";


function NewPatientSignInPage(){

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchUser());
    dispatch(fetchProfiles());
        
  }, [dispatch]);


  const [keysToSimplyPT, setKeysToSimplyPT] = useState(null);

  useEffect(() => {

    fetch("/keysToSimplyPT")
      .then(response => response.json())
      .then(data => setKeysToSimplyPT(data))

  }, []);


  if (!user) return <Login/>;

  if (user.type === "Patient" && user.patient_profile === null) return <ProfileForm/>

  // Depending on user type will determine the dashboard they will get either patients or pt ... in future - admin

  // Patient DashBoard
  // PhysicalTherapist DashBoard
  // Administrator DashBoard - Future
  
  function showDashBoard(user){
    switch (user.type) {
      case "Patient":
        // console.log("Patient");
        // Patient DashBoard
        return <PatientDashBoard keysToSimplyPT={keysToSimplyPT} />
        // eslint-disable-next-line
        break;
      case "PhysicalTherapist":
        // console.log("Physical Therapist");
        // PhysicalTherapist DashBoard
        return <PhysicalTherapistDashBoard keysToSimplyPT={keysToSimplyPT} />
        // eslint-disable-next-line
        break;
      case "Administrator":
        // console.log("Administrator");
        // Administrator DashBoard
        break;
      default:
        console.log(`Sorry, that type doesn't exist ${user.type}`);
    }
  }
  
  return (
    <>
      {/* NewPatientSignInPage
      <br/>
      <br/> */}
      {showDashBoard(user)}
    </>
  );
}
export default NewPatientSignInPage;