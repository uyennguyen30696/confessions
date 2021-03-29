import React from "react";
import "../styling/login.css";
import NavBarWelcome from "../components/NavBarWelcome";
import Login from "../components/Login";

function Loginpage() {
  return (
    <div id="login-page">
      <NavBarWelcome />
      <Login />
    </div>
  );
};

export default Loginpage;
