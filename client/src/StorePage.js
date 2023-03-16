import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreNavBar from "./StoreNavBar";
import StoreHomePage from "./StoreHomePage";
import StoreSearchPage from "./StoreSearchPage";
import StoreMyCartPage from "./StoreMyCartPage";

function StorePage(){
  
  return (
    <>

      <StoreNavBar/>

      <Switch>

        <Route path="/store/home">
          <StoreHomePage />
        </Route>

        <Route path="/store/search">
          <StoreSearchPage />
        </Route>

        <Route path="/store/cart">
          <StoreMyCartPage />
        </Route>

      </Switch>      

    </>
  );
}
export default StorePage;