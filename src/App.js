import React from "react";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/Singn";
import AuthDetails from "./components/auth/AuthDetails";

const App = () => {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
      <AuthDetails />
    </div>
  );
};

export default App;
