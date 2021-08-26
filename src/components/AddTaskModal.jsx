import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { TodosContext } from "../context/todosContext";
import "../Sass/AddTaskModal.scss";

const initialForm = { task: "", id: null };

const AddTaskModal = ({ isModalDisplayed, setIsModalDisplayed }) => {
  const inputRef = useRef();
  const pRef = useRef();
  const { toDo, setToDo } = useContext(TodosContext);
  const { themes } = useContext(ThemeContext);
  const [form, setForm] = useState(initialForm);
  const [formArray, setFormArray] = useState([]);

  const saveTask = () => {
    const filteredFormArray = formArray.filter(el => el.length > 20);

    if (!form.task) {
      pRef.current.textContent = "Enter your task";
      pRef.current.classList.remove("p-hidden");
      return;
    } else {
      pRef.current.classList.add("p-hidden");
    }

    if (filteredFormArray.length) {
      pRef.current.textContent =
        "Tasks can't have words with more than 20 letters";
      pRef.current.classList.remove("p-hidden");
      return;
    } else {
      pRef.current.classList.add("p-hidden");
    }

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

    setFormArray(inputRef.current.value.split(" ") || "");
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
          ref={inputRef}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
        <p className="p-hidden" ref={pRef}></p>
        <div className="modal-btns">
          <button
            style={{
              border: `2px solid ${themes[localStorage.getItem("theme")]}`,
            }}
            onClick={() => {
              setIsModalDisplayed(false);
              inputRef.current.value = "";
              setForm({});
              pRef.current.classList.add("p-hidden");
            }}
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
