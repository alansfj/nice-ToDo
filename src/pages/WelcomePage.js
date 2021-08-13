import React from "react";
import WelcomeForm from "../components/WelcomeForm";

const WelcomePage = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "80px 0",
          backgroundColor: "#294168",
        }}
      >
        {" "}
        <h1 style={{ color: "white", margin: "0" }}>
          Welcome to Nice Notes, a free ToDo/Notes app
        </h1>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <WelcomeForm />
      </div>
    </div>
  );
};

export default WelcomePage;
