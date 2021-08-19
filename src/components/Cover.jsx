import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
// import { UserContext } from "../context/userContext";
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
        <button className="btn-settings" onClick={showSettings}>
          Settings
        </button>
      </div>
    </div>
  );
};

export default Cover;
