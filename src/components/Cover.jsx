import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Gear from "../icons/Gear.jsx";
import "../Sass/Cover.scss";

const Cover = ({ settingsRef, settingsUser }) => {
  //   const { user } = useContext(UserContext);
  const { themes } = useContext(ThemeContext);
  const user = localStorage.getItem("user");

  const showSettings = () => {
    settingsRef.current.classList.toggle("div-hidden");
  };

  return (
    <div
      className="cover-container"
      // style={{ backgroundColor: `${themes[theme]}` }}
      style={{ backgroundColor: `${themes[localStorage.getItem("theme")]}` }}
    >
      <div className="cover-info">
        <div className="user-date">
          <h1>Welcome {settingsUser || user}</h1>
          <h3>{new Date().toLocaleDateString()}</h3>
        </div>
        <div
          className="btn-settings"
          onClick={showSettings}
          // style={{ fontSize: "20px" }}
        >
          <Gear />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
