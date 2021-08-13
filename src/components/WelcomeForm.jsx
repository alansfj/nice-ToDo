import React from "react";
import "./WelcomeForm.scss";

const WelcomeForm = () => {
  return (
    <div className="welcome-form-container">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" autoComplete="off" placeholder="type..." />
      <button className="btn">Continue</button>
    </div>
  );
};

export default WelcomeForm;
