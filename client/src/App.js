import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log(user)
          setUser(user)
        });
      } else {
        r.json().then((err) => console.log(err)
        // setErrors(err.errors)
        );
      }
    });
  }

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  console.log(user)



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />




        <form className="loginSignUp" onSubmit={handleSubmit}>
          <h2>Login Here</h2>

          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <button> Login </button>

          {/* {errors.map((err) => ( <h6 key={err}>{err}</h6>))} */}

        </form>

        <button className="logOutButton" onClick={handleLogoutClick}>
          Logout
        </button>







        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
