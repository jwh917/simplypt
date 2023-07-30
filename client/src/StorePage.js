import React from "react";
import { Switch, Route } from "react-router-dom";
import StoreHomePage from "./StoreHomePage";
import StoreSearchPage from "./StoreSearchPage";
import StoreMyCartPage from "./StoreMyCartPage";

function StorePage({setItemsCountRefresher}){
  
  return (
    <>

      <Switch>

        <Route path="/store/home">
          <StoreHomePage setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

        <Route path="/store/search">
          <StoreSearchPage setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

        <Route path="/store/cart">
          <StoreMyCartPage setItemsCountRefresher={setItemsCountRefresher}/>
        </Route>

      </Switch>      

    </>
  );
}
export default StorePage;