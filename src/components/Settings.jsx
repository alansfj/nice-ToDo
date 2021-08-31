import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/themeContext";
import "../Sass/Settings.scss";

const Settings = ({ settingsRef, setSettingsUser, showHideSettings }) => {
  const inputRef = useRef();

  useEffect(() => {
    const actualTheme = document.querySelector(
      `#${localStorage.getItem("theme")}` || `#${theme}`
    );
    actualTheme.classList.add("theme-selected");

    inputRef.current.value = localStorage.getItem("user");
  }, []);

  const { themes, theme, setTheme } = useContext(ThemeContext);

  const changeTheme = e => {
    const allThemes = document.querySelectorAll(".theme");

    allThemes.forEach(theme => {
      theme.classList.remove("theme-selected");
    });

    e.target.classList.add("theme-selected");
    setTheme(e.target.id);
    localStorage.setItem("theme", e.target.id);
  };

  const changeUser = e => {
    setSettingsUser(e.target.value);
    localStorage.setItem("user", e.target.value);
  };

  return (
    <div ref={settingsRef} className="exterior-container div-hidden">
      <div className="inner-container">
        <h2>Settings</h2>
        <p>Name</p>
        <input
          ref={inputRef}
          type="text"
          id="name"
          name="name"
          placeholder="Some name..."
          autoComplete="off"
          maxLength="15"
          onChange={changeUser}
        />
        <p>Select Theme</p>
        <div className="themes-container">
          <div className="theme" id="defaultBlue" onClick={changeTheme}></div>
          <div className="theme" id="green" onClick={changeTheme}></div>
          <div className="theme" id="blue" onClick={changeTheme}></div>
          <div className="theme" id="red" onClick={changeTheme}></div>
          <div className="theme" id="purple" onClick={changeTheme}></div>
          <div className="theme" id="orange" onClick={changeTheme}></div>
          <div className="theme" id="violet" onClick={changeTheme}></div>
          <div className="theme" id="yellow" onClick={changeTheme}></div>
        </div>
        <button
          style={{
            border: `2px solid ${themes[localStorage.getItem("theme")]}`,
          }}
          className="close-btn"
          onClick={showHideSettings}
        >
          Close Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
