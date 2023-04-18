import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login() {
  const [loginSignup, setLoginSignup] = useState(true);

  const [keysToSimplyPT, setKeysToSimplyPT] = useState(null);

  useEffect(() => {

    fetch("/keysToSimplyPT")
      .then(response => response.json())
      .then(data => setKeysToSimplyPT(data))

  }, []);

  return (
    <div>
      {loginSignup ? (
        <>
          <LoginForm setLoginSignup={setLoginSignup}/>
        </>
      ) : (
        <>
          <SignUpForm setLoginSignup={setLoginSignup} keysToSimplyPT={keysToSimplyPT} />
        </>
      )}
    </div>
  );
}


export default Login;