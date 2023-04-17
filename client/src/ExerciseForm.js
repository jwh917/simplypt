import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import HorizontalScroll from 'react-horizontal-scrolling'


function ExerciseForm({patientId, muscleInjury, setShowExerciseForm, exerciseKey}) {


  console.log(patientId)
  console.log(muscleInjury)
  console.log(exerciseKey)
  

  const user = useSelector(selectUser);
  console.log(user)
  console.log(user.id)


  // const [exercises, setExercises] = useState([
  //   {bodyPart
  //     : 
  //     "upper legs",
  //     equipment
  //     : 
  //     "body weight",
  //     gifUrl
  //     : 
  //     "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
  //     id
  //     : 
  //     "1512",
  //     name
  //     : 
  //     "all fours squad stretch",
  //     target
  //     : 
  //     "quads"}
  // ])

  const [exercises, setExercises] = useState([])


  const [selectedExercises, setSelectedExercises] = useState(null)


  
  // const memoObj = React.useMemo(() => { return { bar: 'foo' } }, [])
  // const someValue = useMemo(() => ({ value: options }))
  
  const optionsValues = useMemo(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${exerciseKey.exercise_key}`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
      };

      return options
 }, [exerciseKey.exercise_key])
 

  // console.log(optionsValues)


  useEffect(() => {

  fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${muscleInjury}`, optionsValues)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    setExercises(response)
    window.scrollBy(0, 500);
  })
  .catch(err => console.error(err));
        
  }, [muscleInjury, optionsValues]);


  // fetch
  // set state for exercises after
  function closeExerciseForm(){
    setShowExerciseForm(false)
  }

  function exceriseInfo(exercise){
    setSelectedExercises(exercise)
  }

  // console.log(exercises)
  // console.log(exercises.slice(0, 10))

  const showExerciseChoice = exercises.map((exercise) => {
    return(
    <button key={exercise.id} onClick={() => exceriseInfo(exercise)} style={{ border: "2px solid black", borderRadius: "20px", padding: "5px", textAlign: "center", marginLeft: "25px", wordWrap: "break-word", width: "200px"}}>
      <p>Body Part: {exercise.bodyPart}</p>
      <p>Equipment: {exercise.equipment}</p>
      <img src={exercise.gifUrl} alt="exercise.gifUrl" width="150px" height="150px"/>
      <p>Name: {exercise.name}</p>
      <p>Target: {exercise.target}</p>
      {/* opens up excerises from api  */}
      {/* PT pick one and it is posted/created for a patient */}
    </button>
    )

  })

  console.log(selectedExercises)
  
  // show exercises in buttons
  // clicking of a button will populate form to be submited

  // t.integer "patient_id"
  // t.integer "physical_therapist_id"
  // t.string "description"
  // t.datetime "created_at", precision: 6, null: false
  // t.datetime "updated_at", precision: 6, null: false
  // t.string "muscle"
  // t.string "equipment"
  // t.string "gifurl"

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

    console.log(newExerciseInfo)

    fetch("/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExerciseInfo),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((newExerciseInfo) => console.log(newExerciseInfo));
      } 
      // Succesful - the exercise has been assinged MESSAGE or NOTIFCATION*
      // else {
      //   r.json().then((err) => {
      //     setErrors(err.errors)});
      // }
    })
    // event.target.reset()
    setShowExerciseForm(false)

    // emailjs.send("service_l9nkl0m", "template_7rghcj9", newExerciseInfo, "YjGIlb4l4IW5VXFDe")
    // .then(res => {
    //   console.log("Success", res)
    // }, error => {
    //   console.log("Failed...", error)
    // })

  }
  

  return (
    <div>
            
      <h3 style={{marginLeft: "5px"}}><u>Exercises</u></h3>
      <button onClick={closeExerciseForm} style={{marginLeft: "45px", borderRadius: "3px"}}>X</button>
      <br/>
      <br/>
      
      {/* buttons */}
      <HorizontalScroll reverseScroll={true}>
        {showExerciseChoice.slice(0, 35)}
      </HorizontalScroll>



      <br/>
      <br/>
      {/* form */}


      {selectedExercises ?

      <div style={{textAlign: "center"}}>

        <form onSubmit={exerciseSubmit}>
          <h3><u>Assign Patient Exercise Form</u></h3>

          <label htmlFor="description" style={{fontSize: "18px"}}>Description: <input type="description" readOnly value={selectedExercises.name} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <label htmlFor="equipment" style={{fontSize: "18px"}}>Equipment: <input type="equipment" readOnly value={selectedExercises.equipment} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <label htmlFor="muscle" style={{fontSize: "18px"}}>Muscle: <input type="muscle" readOnly value={selectedExercises.target} style={{backgroundColor: "rgba(255,255,255,0.07)", borderRadius: "3px"}}/></label> <br/><br/>
          

          <button style={{ fontSize: "18px", fontWeight: "800", borderRadius: "5px", height: "50px"}}>Submit To Patient</button>

        </form>
        
      </div>



       : ""}
       <br/>
    </div>
  );
}


export default ExerciseForm;
