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
    <button key={exercise.id} className="dashBoard" onClick={() => exceriseInfo(exercise)} style={{ border: "2px solid black", borderRadius: "20px", padding: "5px", textAlign: "center", marginLeft: "25px", wordWrap: "break-word", width: "200px"}}>
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
  

  return (
    <div>
            
      <h3 style={{marginLeft: "5px"}}><u>Exercises</u></h3>
      <button className="buttonEffect" onClick={closeExerciseForm} style={{marginLeft: "45px", backgroundColor: "white", fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "40px"}}>X</button>
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

      <div style={{textAlign: "center", fontSize: "18px"}}>

        <form ref={ref} onSubmit={exerciseSubmit}>
          <h3><u>Assign Patient Exercise Form</u></h3>

          <label htmlFor="description">Description: <input type="description" readOnly value={selectedExercises.name} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <label htmlFor="equipment">Equipment: <input type="equipment" readOnly value={selectedExercises.equipment} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <label htmlFor="muscle">Muscle: <input type="muscle" readOnly value={selectedExercises.target} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <button className="buttonEffect1" style={{ fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}>Submit To Patient</button>

        </form>
        
      </div>

       : ""}
       <br/>
    </div>
  );
}


export default ExerciseForm;
