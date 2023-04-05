import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup, selectErrors } from "./userSlice";
// import emailjs from '@emailjs/browser';


function SignUpForm({setLoginSignup}) {


  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    type: "Patient",
    image: "",
  });
  


  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name)
    // console.log(value)
    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
    // e.target.reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(userInput)
    dispatch(userSignup(userInput));
    
    // if(userInput.username === "" || userInput.password === "" || userInput.name === "" || userInput.email === "" || userInput.image === "") return

    // emailjs.send()
    //   .then(res => {
    //     console.log("Success", res)
    //   }, error => {
    //     console.log("Failed...", error)
    //   })
  }

  return (
 
    <form  onSubmit={handleSubmit}>
      <h2>New Patient SignUp Here</h2>

      <label htmlFor="username">Username</label>
      <input type="text" placeholder="Username" name="username" onChange={inputOnChange}/>

      <label htmlFor="name">Name</label>
      <input type="name" placeholder="Name" name="name" onChange={inputOnChange}/>

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email" name="email" onChange={inputOnChange}/>

      <label htmlFor="type">Type</label>
      {/* DropDown */}
      <select name="type" onChange={inputOnChange}>
        <option value="Patient">Patient</option>
      </select>

      <label htmlFor="image">Image</label>
      {/* Pic input */}
      <input name="image" type="file" onChange={inputOnChange} />

      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" name="password" onChange={inputOnChange}/>

      <label htmlFor="passwordConformation">Password Conformation</label>
      <input type="password" placeholder="Password Conformation" name="password_conformation" onChange={inputOnChange}/>

      <button type="submit"> SignUp </button>

      {errors.map((err) => (<h6 key={err}>{err}</h6>))}

      <div>
        <h3>
          Already have an account? &nbsp;
          <button className="SignUpButton" onClick={() => setLoginSignup(true)}>
            Log In
          </button>
        </h3>  
      </div>

    </form>
  );
}


export default SignUpForm;