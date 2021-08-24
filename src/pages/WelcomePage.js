import React from "react";
import WelcomeForm from "../components/WelcomeForm";
import "../Sass/WelcomePage.scss";

const WelcomePage = () => {
  return (
    <div>
      <div className="title-box">
        {" "}
        <h1 className="welcome-title">
          Welcome to "Nice ToDo", a free ToDo app
        </h1>
        <p>"Nice ToDo" keeps your ToDos's even if you close your browser. 😉</p>
      </div>
      <div className="welcome-form-box">
        <WelcomeForm />
      </div>
    </div>
  );
};

export default WelcomePage;
