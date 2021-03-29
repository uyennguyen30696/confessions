import React from "react";
import "../styling/welcome.css";
import NavBarWelcome from "../components/NavBarWelcome";
import Jumbotron from "../components/Jumbotron";

function Welcome() {
    return (
        <div id="welcome-page">
            <NavBarWelcome />
            <Jumbotron />
            <div className="welcome">
                <h1 id="welcome-text" className="animate__animated animate__fadeIn">
                    Welcome to our site!
                </h1>
                <br></br>
                <br></br>
                <h3 id="greeting">
                    Anonimous confession is a great way to relieve stress and anxiety. 
                    <br></br>
                    Join our community for peace and support or read many confessions left by others.
                </h3>
            </div>
            <p>
            {/* Image by greissdesign from Pixabay 
            Image by Gordon Johnson from Pixabay
            by Please Don't sell My Artwork AS IS from Pixabay
            Image by SignsPub from Pixabay    */}
            </p>
        </div>
    );
};

export default Welcome;
