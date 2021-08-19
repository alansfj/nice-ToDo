import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import "../Sass/Settings.scss";

const Settings = ({ settingsRef, setSettingsUser }) => {
  useEffect(() => {
    const actualTheme = document.querySelector(
      `#${localStorage.getItem("theme")}` || `#${theme}`
    );
    actualTheme.classList.add("theme-selected");

    const userInput = document.querySelector("#name");
    userInput.value = localStorage.getItem("user");
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = e => {
    // console.log(e.target);
    const allThemes = document.querySelectorAll(".theme");
    // console.log(allThemes);
    allThemes.forEach(el => {
      el.classList.remove("theme-selected");
    });
    e.target.classList.add("theme-selected");
    setTheme(e.target.id);
    localStorage.setItem("theme", e.target.id);
  };

  const changeUser = e => {
    setSettingsUser(e.target.value);
    localStorage.setItem("user", e.target.value);
  };

  const closeSettings = () => {
    settingsRef.current.classList.add("div-hidden");
  };

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
        <button className="close-btn" onClick={closeSettings}>
          Close Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
