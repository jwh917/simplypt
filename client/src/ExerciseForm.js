import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";


function ExerciseForm({patientId, muscleInjury}) {

  console.log(patientId)
  console.log(muscleInjury)

  const user = useSelector(selectUser);
  console.log(user)
  console.log(user.id)


  const [exercises, setExercises] = useState([])


  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

  // useEffect(() => {

  // fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${muscleInjury}`, options)
  // .then(response => response.json())
  // .then(response => {
  //   console.log(response)
  //   setExercises(response)
  // })
  // .catch(err => console.error(err));
        
  // }, []);


  // fetch
  // set state for exercises after

  console.log(exercises)
  console.log(exercises.slice(0, 10))

  // const showExerciseChoice = exercises.map((exercise) => {

  //   return(
  //   <div key={exercise.id}>
  //     {/* <p>Name: {patient.name}</p>
  //     <p>Email: {patient.email}</p>
  //     <p>Phone: {patient.profile.phone}</p>
  //     <p>DOB: {patient.profile.dob}</p>
  //     <p>Sex: {patient.profile.sex}</p>
  //     <p>Muscle Injury: {patient.profile.muscle_injury}</p>
  //     <button value={patient.id} name={patient.profile.muscle_injury} onClick={assignExercises}>Assign Exercises 💪🏽🦵🏼🦶🏿</button> */}
  //     {/* opens up excerises from api  */}
  //     {/* PT pick one and it is posted/created for a patient */}
  //   </div>
  //   )

  // })
  
  // show exercises in buttons
  // clicking of a button will populate form to be submited
  

  return (
    <div>
      Assign Patient Exercise Form
      {/* buttons */}
      {/* form */}
    </div>
  );
}


export default ExerciseForm;