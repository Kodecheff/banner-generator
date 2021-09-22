import React from "react";

import SignupButton from './Buttons/SignupButton'

import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="d-flex">
      <h1>Banner Generator</h1>
      <div>
        {!isAuthenticated ? <SignupButton /> : ""}
      </div>
    </div>
    )
};

export default MainNav;