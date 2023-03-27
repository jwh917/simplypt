import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, selectUser } from "./userSlice";
import { profileCreate, profileSelectErrors } from "./profileSlice";


function ProfileForm() {

  const dispatch = useDispatch();

  const errors = useSelector(profileSelectErrors);

  const user = useSelector(selectUser);

  // console.log(user)

  const [newProfileInput, setNewProfileInput] = useState({
    patient_id: user.id,
    dob: "",
    address: "",
    phone: "",
    sex: "",
    muscle_injury: ""
  });

  // console.log(newProfileInput)


  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name)
    // console.log(value)
    setNewProfileInput({
      ...newProfileInput, //spreading the newProfileInput
      [name]: value, //inserting the name and value the user typed in
    });


    // e.target.reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(newProfileInput)
    dispatch(addProfile(newProfileInput));
    dispatch(profileCreate(newProfileInput));

  }



  return (
 
    <form onSubmit={handleSubmit} >
      <h2>Fill Out Profile Here</h2>

      <label htmlFor="dob">DOB:</label>
      <input type="date" id="dob" name="dob" onChange={inputOnChange} />

      <label htmlFor="address">Address:</label>
      <input type="text" placeholder="Address" id="address" name="address" onChange={inputOnChange}/>

      <label htmlFor="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" onChange={inputOnChange}/>
      <small>Format: 123-456-7890</small>


      <fieldset data-role="controlgroup">
      <legend>Choose your gender:</legend>
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" id="male" value="male" onChange={inputOnChange}/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="sex" id="female" value="female" onChange={inputOnChange}/>
      </fieldset>

      <label htmlFor="muscle_injury">Muscle Injury:</label>
      <select name="muscle_injury" onChange={inputOnChange}>
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

      <button>Continue...</button>

      {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

    </form>
  );
}


export default ProfileForm;