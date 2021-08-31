import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Gear from "../icons/Gear.jsx";
import "../Sass/Cover.scss";

const Cover = ({ settingsRef, settingsUser, showHideSettings }) => {
  const { themes } = useContext(ThemeContext);
  const user = localStorage.getItem("user");

  return (
    <div
      className="cover-container"
      style={{ backgroundColor: `${themes[localStorage.getItem("theme")]}` }}
    >
      <div className="cover-info">
        <div className="user-date">
          <h1>Welcome {settingsUser || user}</h1>
          <h3>{new Date().toLocaleDateString()}</h3>
        </div>
        <div className="btn-settings" onClick={showHideSettings}>
          <Gear />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
