import React, { useState, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import HorizontalScroll from 'react-horizontal-scrolling'


function ExerciseForm({patientId, muscleInjury, setShowExerciseForm, keysToSimplyPT}) {

  const user = useSelector(selectUser);

  const [exercises, setExercises] = useState([])

  const [selectedExercises, setSelectedExercises] = useState(null)
  
  const optionsValues = useMemo(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${keysToSimplyPT.exercise_key}`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
      };

      return options
 }, [keysToSimplyPT.exercise_key])
 

  useEffect(() => {

  fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${muscleInjury}`, optionsValues)
  .then(response => response.json())
  .then(response => {
    setExercises(response)
    window.scrollBy(0, 500);
  })
  .catch(err => console.error(err));
        
  }, [muscleInjury, optionsValues]);


  function closeExerciseForm(){
    setShowExerciseForm(false)
  }

  const ref = useRef(null);

  function exceriseInfo(exercise){
    setSelectedExercises(exercise)

  }

  useEffect(() => {
    // scroll to bottom every time selectedExercises change
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }, [selectedExercises]);



  const showExerciseChoice = exercises.map((exercise) => {
    return(
    <button key={exercise.id} className="dashBoard" onClick={() => exceriseInfo(exercise)} id="ExerciseFormChoiceButton">
      <p>Body Part: {exercise.bodyPart}</p>
      <p>Equipment: {exercise.equipment}</p>
      <img src={exercise.gifUrl} alt="exercise.gifUrl" width="150px" height="150px"/>
      <p>Name: {exercise.name}</p>
      <p>Target: {exercise.target}</p>
    </button>
    )

  })

  function exerciseSubmit(e){
    e.preventDefault();

    const newExerciseInfo = {
      patient_id: patientId,
      physical_therapist_id: user.id,
      physical_therapist_name: user.name,
      muscle: selectedExercises.target,
      description: selectedExercises.name,
      equipment: selectedExercises.equipment,
      gifurl: selectedExercises.gifUrl
    }

    fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExerciseInfo),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((newExerciseInfo) => 
        console.log(newExerciseInfo))
        alert("Patient Has Been Assigned An Exercise")

      } 
      else {
        r.json().then((err) => console.log(err.errors));
      }
    })

    setShowExerciseForm(false)
  }

function showPatientInfo(patientId){
  const patientInfo = user.patients.find((patient) => patient.id === parseInt(patientId))
  return patientInfo.name
}
  

  return (
    <div>
            
      <h3 className="ExerciseFormHeader"><u>Exercises</u></h3>
      <h2>For Patient: {showPatientInfo(patientId)}</h2>
      <button className="buttonEffect" onClick={closeExerciseForm} id="xButton">X</button>
      <br/>
      <br/>
      
      <div>
        <HorizontalScroll reverseScroll={true}>
          {showExerciseChoice.slice(0, 35)}
        </HorizontalScroll>
      </div>
   

      <br/>
      <br/>

      {selectedExercises ?

      <div className="ExerciseFormDiv">

        <form ref={ref} onSubmit={exerciseSubmit}>
          <h3><u>Assign Patient Exercise Form</u></h3>

          <label htmlFor="description">Description: <input type="description" readOnly value={selectedExercises.name} /></label> <br/><br/>
          

          <label htmlFor="equipment">Equipment: <input type="equipment" readOnly value={selectedExercises.equipment} /></label> <br/><br/>
          

          <label htmlFor="muscle">Muscle: <input type="muscle" readOnly value={selectedExercises.target} /></label> <br/><br/>
          

          <button className="buttonEffect1" id="ExerciseFormButton">Submit To Patient</button>

        </form>
        
      </div>

       : ""}
       <br/>
    </div>
  );
}


export default ExerciseForm;
