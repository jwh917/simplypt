import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, selectErrors } from "./userSlice";


function LoginForm({setLoginSignup}) {

  const dispatch = useDispatch();

  const errors = useSelector(selectErrors);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });


  function loginOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(user));
  };

  return (
 
    <div className="categoryGrid">

      <div>
        <form className="loginSignUp" onSubmit={loginSubmit}>
          <h2>Login Here</h2>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" name="username" onChange={loginOnChange}/>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" name="password" onChange={loginOnChange}/>

          <button type="submit" className="loginSignUpFormButton">Login</button>

          {errors.map((err) => ( <h6 key={err}>{err}</h6>))}

          <div>
            <br/>
            <h3>
              Don't have an account? &nbsp;
              <button className="SignUpButton" onClick={() => setLoginSignup(false)}>
                Sign Up
              </button>
            </h3>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </form>
      </div>

      <div style={{width: "50%", height: "800px"}}>
        
        <img style={{height:"600px", width:"600px", borderRadius: "300px", marginTop: "80px"}} src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-training-injuries-treatment-sport-medicine-png-image_4622388.png" alt="ptPic5" />

      </div>
      
    </div>

  );
}


export default LoginForm;