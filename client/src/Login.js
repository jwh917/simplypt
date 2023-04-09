import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login() {
  const [loginSignup, setLoginSignup] = useState(true);

  return (
    <div>
      {loginSignup ? (
        <>
          <LoginForm setLoginSignup={setLoginSignup}/>
        </>
      ) : (
        <>
          <SignUpForm setLoginSignup={setLoginSignup} />
        </>
      )}
    </div>
  );
}


export default Login;