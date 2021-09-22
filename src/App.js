import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// import { NavBar, Footer, Loading } from "./components";
import Home from "./Home";
import Profile from "./Profile"
import NavBar from './components/NavBar.js';
import Loader from './Loading'


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
    <div className="m-auto">
      <Loader />
    </div>
    )
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;