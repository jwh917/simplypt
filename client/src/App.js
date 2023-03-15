import './App.css';
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import NewPatientPage from "./NewPatientPage";
import AboutPage from "./AboutPage";
import SignInPage from "./SignInPage";
import StorePage from "./StorePage";


function App() {


  // - Home   
  // - About: Therapist Available 
  // - New Patient: Username Password then Patient Info 
  // - Sign In: Administrators, Patients and Physical Therapist 
  // - Store: Store Home, Store Search and Store Cart 


  return (
    <>
      <NavBar />

      <Switch>

        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/newpatient">
          <NewPatientPage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/store">
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
