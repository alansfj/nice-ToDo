import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const MyNotes = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>My Notes</h2>
      <h2>Welcome {user}</h2>
    </div>
  );
};

export default MyNotes;
