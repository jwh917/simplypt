import './App.css';
import React , {useEffect, useState} from "react";
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

  // user and pts

  const user = useSelector(selectUser);

  const [pts, setPts] = useState([])

  const [itemsCountRefresher, setItemsCountRefresher] = useState([])


  useEffect(() => {

    fetch("/physical_therapists")
      .then(response => response.json())
      .then(data => setPts(data))

  }, []);


  return (
    <>
      <NavBar itemsCountRefresher={itemsCountRefresher}/>

      <Switch>

        <Route exact path="/about">
          <AboutPage pts={pts}/>
        </Route>
        <Route exact path="/signin">
          <NewPatientSignInPage />
        </Route>
        <Route path="/store">
          <StorePage setItemsCountRefresher={setItemsCountRefresher}/>
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
