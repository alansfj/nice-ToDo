import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
// import { UserContext } from "../context/userContext";
import "../Sass/Cover.scss";

const Cover = () => {
  //   const { user } = useContext(UserContext);
  const { themes } = useContext(ThemeContext);
  const user = localStorage.getItem("user");

  return (
    <div
      className="cover-container"
      style={{ backgroundColor: `${themes.blueDefault}` }}
    >
      <div className="cover-info">
        <div className="user-date">
          <h2>Welcome {user}</h2>
          <h4>{new Date().toLocaleDateString()}</h4>
        </div>
        <button className="btn-settings">Settings</button>
      </div>
    </div>
  );
};

export default Cover;
