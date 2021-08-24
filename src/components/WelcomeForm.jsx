import React, { useContext, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "../Sass/WelcomeForm.scss";

const WelcomeForm = () => {
  const { user, setUser } = useContext(UserContext);
  const inputRef = useRef();
  const pRef = useRef();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    inputRef.current.value = user;
  }, []);

  const submitUser = () => {
    // console.log(inputRef.current);
    if (!user) {
      pRef.current.classList.remove("hidden");
    } else {
      localStorage.setItem("user", user);
      history.push(`${location.pathname}my-todo`);
    }
  };

  const handleKeyPress = e => {
    // console.log(e);
    if (e.code === "Enter") {
      submitUser();
    }
  };

  return (
    <div className="welcome-form-container">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        autoComplete="off"
        placeholder="type..."
        maxLength="15"
        onChange={e => setUser(e.target.value.trim())}
        onKeyPress={handleKeyPress}
        ref={inputRef}
      />
      <p ref={pRef} className="hidden">
        Enter a name
      </p>
      <button className="btn" onClick={submitUser}>
        Continue
      </button>
    </div>
  );
};

export default WelcomeForm;
