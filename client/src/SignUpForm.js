import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup, selectErrors } from "./userSlice";
import emailjs from '@emailjs/browser';

import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function SignUpForm({setLoginSignup, keysToSimplyPT}) {


  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const [profilePic, setProfilePic] = useState("")

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    password_confirmation: "",
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <br/>
          <br/>
          <br/>
          <br/>

          <form className="loginSignUp1" onSubmit={handleSubmit}>
            <h2>New Patient SignUp Here</h2>
            
            <Row>
              <Col>
                <label htmlFor="username">Username: <input type="text" placeholder="Username" name="username" onChange={inputOnChange}/> </label>
              </Col>
              <Col>          
                <label htmlFor="name">Name: <input type="text" placeholder="Name" name="name" onChange={inputOnChange}/></label>
              </Col>
              <Col>
                <label htmlFor="email">Email: <input type="email" placeholder="Email" name="email" onChange={inputOnChange}/></label>
              </Col>
            </Row>

            <Row>
              <Col>   
                <label htmlFor="type">Type:   
                  <select name="type" onChange={inputOnChange}>
                    <option value="Patient">Patient</option>
                  </select>
                </label>                
              </Col>
              <Col>          
                <label htmlFor="profilePic">Profile Picture: <input name="profilePic" type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} /> </label>
              </Col>
            </Row>

            <Row>
              <Col>          
                <label htmlFor="password">Password: <input type="password" placeholder="Password" name="password" onChange={inputOnChange}/> </label>
              </Col>
              <Col>          
                <label htmlFor="passwordConformation">Password Conformation: <input type="password" placeholder="Password Conformation" name="password_confirmation" onChange={inputOnChange}/> </label>
              </Col>
            </Row>
    

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
        
        <div className="col-lg-5 offset-md-3">
          <Image src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-training-injuries-treatment-sport-medicine-png-image_4622388.png" alt="ptPic5" roundedCircle fluid="true" style={{height:"600px", width:"100%", marginTop: "100px", border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 0 40px rgba(8,7,16,0.6)"}}/> 
        </div>
      </div>
      <br/>
      <br/>
    </div>

  );
}


export default SignUpForm;