import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, fetchUser } from "./userSlice";
import Login from "./Login";
import ProfileForm from "./ProfileForm";
import PatientDashBoard from "./PatientDashBoard";
import PhysicalTherapistDashBoard from "./PhysicalTherapistDashBoard";


function NewPatientSignInPage(){

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchUser());
    
  }, [dispatch]);

  if (!user) return <Login/>;

  // user is a Patient
  if (user.type === "Patient" && user.patient_profile === null) return <ProfileForm/>

  // console.log(user)
  // depending on user type depends on the dashboard they will get either patients or pt ... in future - admin
  // if (user.type === "Patient" &&
  // if (user.type === "PhysicalTherapist" &&
  // if (user.type === "Administrator" &&

  // Patient DashBoard
  // PhysicalTherapist DashBoard
  // Administrator DashBoard - Future

  function showDashBoard(user){
    switch (user.type) {
      case "Patient":
        // console.log("Patient");
        // Patient DashBoard
        return <PatientDashBoard/>
        break;
      case "PhysicalTherapist":
        console.log("PhysicalTherapist");
        // PhysicalTherapist DashBoard
        return <PhysicalTherapistDashBoard/>
        break;
      case "Administrator":
        console.log("Administrator");
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