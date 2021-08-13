import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import "./Cover.scss";

const Cover = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="cover-container">
      <h1>Welcome {user}</h1>
    </div>
  );
};

export default Cover;
