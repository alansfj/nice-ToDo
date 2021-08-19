import React, { useContext, useEffect, useRef, useState } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/AddTaskModal.scss";

const initialForm = { task: "", id: null };

const AddTaskModal = ({ isModalDisplayed, setIsModalDisplayed }) => {
  const inputRef = useRef();
  const pRef = useRef();
  const { toDo, setToDo } = useContext(TodosContext);
  const [form, setForm] = useState(initialForm);

  const saveTask = () => {
    if (!form.task) {
      pRef.current.classList.remove("p-hidden");
      return;
    } else {
      pRef.current.classList.add("p-hidden");
    }

    // let todoObject = { id: Date.now(), task: form.task };

    // localStorage.setItem("todo", JSON.stringify(todoObject));

    toDo.push({ id: Date.now(), task: form.task });
    localStorage.setItem("todo", JSON.stringify([...toDo]));
    setToDo([...toDo]);
    setIsModalDisplayed(false);
    inputRef.current.value = "";
    setForm(initialForm);
  };

  const handleKeyPress = e => {
    if (e.code === "Enter") {
      saveTask();
    }
  };

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div className={`${isModalDisplayed && "displayed"} modal-container`}>
      <div className="modal-form">
        <h3>New Task</h3>
        <input
          type="text"
          name="task"
          placeholder="Task..."
          autoComplete="off"
          // maxLength="30"
          ref={inputRef}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
        <p className="p-hidden" ref={pRef}>
          Enter your task
        </p>
        <div className="modal-btns">
          <button
            onClick={() => {
              setIsModalDisplayed(false);
              inputRef.current.value = "";
              setForm({});
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
