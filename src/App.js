import "./App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login.js";
import React, {useEffect} from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {

  const [{user},dispatch] = useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
     console.log("user is >> ", authUser)
     if(authUser){
      dispatch({
        type:"SET_USER",
        user: authUser,
      });
     }
     else{
      dispatch({
        type:"SET_USER",
        user: null,
      });
     }
   });
  }, []);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
