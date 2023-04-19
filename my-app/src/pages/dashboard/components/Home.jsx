import React from "react";
import Logo from "../../../assets/images/9KICKS PNG.png"
import "../styles/Home.css"

function Home() {
    return (
        <div className="home-page">
            <img src={Logo} alt="9KICKS Logo" className="logo"/>
            <h1 className="home-page-text">Welcome to the 9KICKS Sneaker Quiz</h1>
            <h2 className="home-page-text">Are you truly a sneakerhead? Let's find out</h2>
            <button className="begin-quiz-button" onClick={() => window.location.href = "/quiz"}>Begin Quiz!</button>
            {/*<a href="/quiz" className="begin-quiz-button">Begin Quiz!</a>*/}
        </div>
    );
}

export default Home;