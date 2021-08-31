import React, { useRef, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import Cover from "../components/Cover";
import Settings from "../components/Settings";
import ToDo from "../components/ToDo";

const MyNotes = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [settingsUser, setSettingsUser] = useState();

  const settingsRef = useRef();

  const showHideSettings = () => {
    settingsRef.current.classList.toggle("div-hidden");
  };

  return (
    <div>
      <Cover
        settingsRef={settingsRef}
        settingsUser={settingsUser}
        showHideSettings={showHideSettings}
      />
      <Settings
        settingsRef={settingsRef}
        setSettingsUser={setSettingsUser}
        showHideSettings={showHideSettings}
      />
      <ToDo setIsModalDisplayed={setIsModalDisplayed} />
      <AddTaskModal
        isModalDisplayed={isModalDisplayed}
        setIsModalDisplayed={setIsModalDisplayed}
      />
    </div>
  );
};

export default MyNotes;
