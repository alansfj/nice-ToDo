import React, { useContext, useRef } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/AddTaskModal.scss";

const AddTaskModal = ({ isModalDisplayed, setIsModalDisplayed }) => {
  const inputRef = useRef();
  const pRef = useRef();
  const { toDo, setToDo } = useContext(TodosContext);
  let id = 1;

  const saveTask = () => {
    if (!inputRef.current.value.trim()) {
      //   console.log("input vacio");
      pRef.current.classList.remove("p-hidden");
    } else {
      pRef.current.classList.add("p-hidden");
      setToDo({ ...toDo, id: id++, task: inputRef.current.value });
    }
  };

  const handleKeyPress = e => {
    if (e.code === "Enter") {
      saveTask();
    }
  };

  return (
    <div className={`${isModalDisplayed && "displayed"} modal-container`}>
      <div className="modal-form">
        <h3>New Task</h3>
        <input
          type="text"
          placeholder="Task..."
          ref={inputRef}
          onKeyPress={handleKeyPress}
        />
        <p className="p-hidden" ref={pRef}>
          Enter your task
        </p>
        <div className="modal-btns">
          <button
            onClick={() => {
              setIsModalDisplayed(false);
              inputRef.current.value = "";
              pRef.current.classList.add("p-hidden");
            }}
          >
            Cancel
          </button>
          <button onClick={saveTask}>Save Task</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
