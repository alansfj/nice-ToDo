import React, { useContext, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "../Sass/WelcomeForm.scss";

const WelcomeForm = () => {
  const { user, setUser } = useContext(UserContext);
  const pRef = useRef();
  const history = useHistory();
  const location = useLocation();

  const handleOnChange = e => {
    setUser(e.target.value);
  };

  const handleOnKeyPress = e => {
    if (e.code === "Enter") handleOnClick();
  };

  const handleOnClick = () => {
    if (!user) {
      pRef.current.classList.remove("hidden");
    } else {
      localStorage.setItem("user", user);
      history.push(`${location.pathname}my-todo`);
    }
  };

  return (
    <div className="welcome-form-container">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={user}
        autoComplete="off"
        placeholder="type..."
        maxLength="15"
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <p ref={pRef} className="hidden">
        Enter a name
      </p>
      <button onClick={handleOnClick}>Continue</button>
    </div>
  );
};

export default WelcomeForm;
