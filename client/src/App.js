import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NewPatientSignInPage from "./NewPatientSignInPage";
import StorePage from "./StorePage";
import Footer from './Footer';

import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";



function App() {

  const user = useSelector(selectUser);

  return (
    <>
      <NavBar/>

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

      <Footer user={user}/>
    </>
  );
}

export default App;
