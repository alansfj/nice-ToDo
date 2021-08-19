import React, { useContext, useRef, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import Cover from "../components/Cover";
import Settings from "../components/Settings";
import ToDo from "../components/ToDo";
import { ThemeContext } from "../context/themeContext";

const MyNotes = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [settingsUser, setSettingsUser] = useState();

  const settingsRef = useRef();

  const { theme } = useContext(ThemeContext);

  localStorage.getItem("theme") || localStorage.setItem("theme", theme);

  return (
    <div>
      <Cover settingsRef={settingsRef} settingsUser={settingsUser} />
      <Settings settingsRef={settingsRef} setSettingsUser={setSettingsUser} />
      <ToDo setIsModalDisplayed={setIsModalDisplayed} />
      <AddTaskModal
        isModalDisplayed={isModalDisplayed}
        setIsModalDisplayed={setIsModalDisplayed}
      />
    </div>
  );
};

export default MyNotes;
