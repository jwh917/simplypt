import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import Login from "./Login";
import { fetchUser } from "./userSlice";


function NewPatientSignInPage(){

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchUser());
    
  }, [dispatch]);

  if (!user) return <Login/>;

  // if (user.profile === null) return <ProfileForm user={user} setUser={setUser} />

  console.log(user)

  
  return (
    <>
      NewPatientSignInPage
    </>
  );
}
export default NewPatientSignInPage;