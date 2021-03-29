import React from "react";
import "../styling/signup.css";
import NavBarWelcome from "../components/NavBarWelcome";
import SignUp from "../components/SignUp"

function Signuppage() {
    return (
        <div id="signup-page">
            <NavBarWelcome />
            <SignUp
            />

        </div>
    );
};


export default Signuppage;