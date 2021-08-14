import React, { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import Cover from "../components/Cover";
import ToDo from "../components/ToDo";

const MyNotes = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  return (
    <div>
      <Cover />
      <ToDo setIsModalDisplayed={setIsModalDisplayed} />
      <AddTaskModal
        isModalDisplayed={isModalDisplayed}
        setIsModalDisplayed={setIsModalDisplayed}
      />
    </div>
  );
};

export default MyNotes;
