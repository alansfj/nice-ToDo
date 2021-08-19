import React, { useRef, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import Cover from "../components/Cover";
import Settings from "../components/Settings";
import ToDo from "../components/ToDo";

const MyNotes = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const settingsRef = useRef();

  return (
    <div>
      <Cover settingsRef={settingsRef} />
      <Settings settingsRef={settingsRef} />
      <ToDo setIsModalDisplayed={setIsModalDisplayed} />
      <AddTaskModal
        isModalDisplayed={isModalDisplayed}
        setIsModalDisplayed={setIsModalDisplayed}
      />
    </div>
  );
};

export default MyNotes;
