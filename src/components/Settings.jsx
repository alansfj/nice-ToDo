import React from "react";
import "../Sass/Settings.scss";

const Settings = ({ settingsRef }) => {
  return (
    <div ref={settingsRef} className="exterior-container div-hidden">
      <div className="inner-container">
        <h2>Settings</h2>
        <p>Name</p>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Some name..."
          autoComplete="off"
        />
        <p>Select Theme</p>
        <div className="themes-container">
          <div className="defaultBlue"></div>
          <div className="green"></div>
          <div className="blue"></div>
          <div className="red"></div>
          <div className="purple"></div>
          <div className="orange"></div>
          <div className="violet"></div>
          <div className="yellow"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
