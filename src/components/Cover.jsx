import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { UserContext } from "../context/userContext";
import "./Cover.scss";

const Cover = () => {
  const { user } = useContext(UserContext);
  const { themes } = useContext(ThemeContext);

  return (
    <div
      className="cover-container"
      style={{ backgroundColor: `${themes.blueDefault}` }}
    >
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Cover;
