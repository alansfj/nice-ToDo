import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import "../Sass/Settings.scss";

const Settings = ({ settingsRef }) => {
  useEffect(() => {
    const actualTheme = document.querySelector(`#${theme}`);
    actualTheme.classList.add("theme-selected");
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
      </div>
    </div>
  );
};

export default Settings;
