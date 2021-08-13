import React, { useContext, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./WelcomeForm.scss";

const WelcomeForm = () => {
  const { user, setUser } = useContext(UserContext);
  const inputRef = useRef();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    inputRef.current.value = user;
  }, []);

  const submitUser = () => {
    // console.log(inputRef.current);
    if (!user) {
      alert("Se necesita proporcionar un nombre");
    } else {
      history.push(`${location.pathname}my-notes`);
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
        onChange={e => setUser(e.target.value.trim())}
        onKeyPress={handleKeyPress}
        ref={inputRef}
      />
      <button className="btn" onClick={submitUser}>
        Continue
      </button>
    </div>
  );
};

export default WelcomeForm;
