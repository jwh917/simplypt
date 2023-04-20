import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup, selectErrors } from "./userSlice";
import emailjs from '@emailjs/browser';


function SignUpForm({setLoginSignup, keysToSimplyPT}) {


  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const [profilePic, setProfilePic] = useState("")

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    type: "Patient",
    image: "https://static.thenounproject.com/png/5034901-200.png",
  });


  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserInput({
      ...userInput, //spreading the userInput
      [name]: value, //inserting the name and value the user typed in
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (userInput.image !== profilePic){

      const data = new FormData()
      data.append("file", profilePic)
      data.append("upload_preset", keysToSimplyPT.upload_preset)
      data.append("cloud_name", keysToSimplyPT.cloud_name)
  
      fetch(`https://api.cloudinary.com/v1_1/${keysToSimplyPT.cloud_name}/image/upload`,{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => dispatch(userSignup({...userInput, image: data.url})))
        .catch(err => console.log(err))
    }
    else {
      dispatch(userSignup(userInput));
    }

    
    if(userInput.username === "" || userInput.password === "" || userInput.name === "" || userInput.email === "" || userInput.image === "") return

    emailjs.send(`${keysToSimplyPT.email_service}`, "template_7rghcj9", userInput, `${keysToSimplyPT.email_key}`)
      .then(res => {
        console.log("Success", res)
      }, error => {
        console.log("Failed...", error)
      })
  }

  return (


    <div className="categoryGrid">

      <div>
        <form className="loginSignUp1" onSubmit={handleSubmit}>
          <h2>New Patient SignUp Here</h2>

        <div className="signUpForm">          

          <label htmlFor="username">Username: <input type="text" placeholder="Username" name="username" onChange={inputOnChange}/> </label>
          
          <label htmlFor="name">Name: <input type="text" placeholder="Name" name="name" onChange={inputOnChange}/></label>
          
          <label htmlFor="email">Email: <input type="email" placeholder="Email" name="email" onChange={inputOnChange}/></label>          

          <label htmlFor="type">Type:   
            <select name="type" onChange={inputOnChange}>
              <option value="Patient">Patient</option>
            </select>
          </label>
         
          <label htmlFor="profilePic">Profile Picture: <input name="profilePic" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} /> </label>
          
          <label htmlFor="password">Password: <input type="password" placeholder="Password" name="password" onChange={inputOnChange}/> </label>
          
          <label htmlFor="passwordConformation">Password Conformation: <input type="password" placeholder="Password Conformation" name="password_conformation" onChange={inputOnChange}/> </label>

        </div>

          <button className="loginSignUpFormButton" type="submit"> SignUp </button>

          <br/>
          <br/>

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
      </div>

      <div style={{width: "50%", height: "800px"}}>
        
        <img style={{height:"600px", width:"600px", borderRadius: "300px", marginTop: "80px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}} src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-training-injuries-treatment-sport-medicine-png-image_4622388.png" alt="ptPic5" />

      </div>
    
    </div>

  );
}


export default SignUpForm;