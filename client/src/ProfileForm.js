import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, selectUser } from "./userSlice";
import { profileCreate } from "./profileSlice";


function ProfileForm() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [newProfileInput, setNewProfileInput] = useState({
    patient_id: user.id,
    dob: "",
    address: "",
    phone: "",
    sex: "",
    muscle_injury: ""
  });



  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setNewProfileInput({
      ...newProfileInput, //spreading the newProfileInput
      [name]: value, //inserting the name and value the user typed in
    });

  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProfile(newProfileInput));
    dispatch(profileCreate(newProfileInput));

  }



  return (
 
    <form className="profileForm" onSubmit={handleSubmit} >
      <h2>Fill Out Profile Here</h2>

      <label htmlFor="dob">DOB:</label>
      <input type="date" id="dob" name="dob" onChange={inputOnChange} />

      <label htmlFor="address">Address:</label>
      <input type="text" placeholder="Address" id="address" name="address" onChange={inputOnChange}/>

      <label htmlFor="phone">Phone number:</label>
      <input type="tel" id="phone" name="phone" onChange={inputOnChange}/>
      <small>Format: 123-456-7890</small>
      <br/>
      <br/>


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
          <option value="abs">abs</option>
          <option value="adductors">adductors</option>
          <option value="biceps">biceps</option>
          <option value="calves">calves</option>
          <option value="cardiovascular%20system">cardiovascular system</option>
          <option value="delts">delts</option>
          <option value="forearms">forearms</option>
          <option value="glutes">glutes</option>
          <option value="hamstrings">hamstrings</option>
          <option value="lats">lats</option>
          <option value="levator%20scapulae">levator scapulae</option>
          <option value="pectorals">pectorals</option>
          <option value="quads">quads</option>
          <option value="serratus%20anterior">serratus anterior</option>
          <option value="spine">spine</option>
          <option value="traps">traps</option>
          <option value="triceps">triceps</option>
          <option value="upper%20back">upper back</option>
      </select>
      <br/>
      <br/>

      <button className="profileFormButton">Continue...</button>

    </form>
  );
}


export default ProfileForm;
