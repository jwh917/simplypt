import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NewPatientSignInPage from "./NewPatientSignInPage";
import StorePage from "./StorePage";

import { fetchUser } from "./userSlice";
import { fetchProfiles } from "./profileSlice";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchUser());
    dispatch(fetchProfiles());
        
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <Switch>

        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/signin">
          <NewPatientSignInPage />
        </Route>
        <Route path="/store">
          <StorePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>

      </Switch>
    </>
  );
}

export default App;
