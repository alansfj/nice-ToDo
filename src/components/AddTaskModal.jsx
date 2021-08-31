import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { TodosContext } from "../context/todosContext";
import "../Sass/AddTaskModal.scss";

const AddTaskModal = ({ isModalDisplayed, setIsModalDisplayed }) => {
  const inputRef = useRef();
  const pRef = useRef();
  const { toDo, setToDo } = useContext(TodosContext);
  const { themes } = useContext(ThemeContext);
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const saveTask = () => {
    if (!task) {
      pRef.current.textContent = "Enter your task";
      pRef.current.classList.remove("p-hidden");
      return;
    } else {
      pRef.current.classList.add("p-hidden");
    }

    const filteredFormArray = taskArray.filter(task => task.length > 20);

    if (filteredFormArray.length) {
      pRef.current.textContent =
        "Tasks can't have words with more than 20 letters";
      pRef.current.classList.remove("p-hidden");
      return;
    } else {
      pRef.current.classList.add("p-hidden");
    }

    toDo.push({ id: Date.now(), task });
    localStorage.setItem("todo", JSON.stringify([...toDo]));
    setToDo([...toDo]);
    restartAndHideModal();
  };

  const handleOnKeyPress = e => {
    if (e.code === "Enter") saveTask();
  };

  const handleOnChange = e => {
    setTask(e.target.value);
    setTaskArray(e.target.value.split(" ") || []);
  };

  const restartAndHideModal = () => {
    setIsModalDisplayed(false);
    inputRef.current.value = "";
    setTask("");
    pRef.current.classList.add("p-hidden");
  };

  return (
    <div className={`${isModalDisplayed ? "displayed" : ""} modal-container`}>
      <div className="modal-form">
        <h3>New Task</h3>
        <input
          type="text"
          name="task"
          placeholder="Task..."
          autoComplete="off"
          ref={inputRef}
          onKeyPress={handleOnKeyPress}
          onChange={handleOnChange}
        />
        <p className="p-hidden" ref={pRef}></p>
        <div className="modal-btns">
          <button
            style={{
              border: `2px solid ${themes[localStorage.getItem("theme")]}`,
            }}
            onClick={restartAndHideModal}
          >
            Cancel
          </button>
          <button
            style={{
              border: `2px solid ${themes[localStorage.getItem("theme")]}`,
            }}
            onClick={saveTask}
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
