import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, fetchUser } from "./userSlice";
import Login from "./Login";
import ProfileForm from "./ProfileForm";


function NewPatientSignInPage(){

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchUser());
    
  }, [dispatch]);

  if (!user) return <Login/>;

  // user is a Patient
  if (user.type === "Patient" && user.patient_profile === null) return <ProfileForm/>

  console.log(user)
  // depending on user type depends on the dashboard they will get either patients or pt ... in future - admin
  // if (user.type === "Patient" &&
  // if (user.type === "PhysicalTherapist" &&
  // if (user.type === "Administrator" &&

  // Patient DashBoard
  // PhysicalTherapist DashBoard
  // Administrator DashBoard - Future
  
  return (
    <>
      NewPatientSignInPage
    </>
  );
}
export default NewPatientSignInPage;