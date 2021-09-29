import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./views/Home";
import NavBar from './components/NavBar';
import Loader from './views/Loading';


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
          <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;