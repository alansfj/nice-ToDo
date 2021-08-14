import React, { useState } from "react";
import "./ToDo.scss";
import ToDoColumn from "./ToDoColumn";

const initialToDos = {
  todo: {},
  inprogress: {},
  done: {},
};

const ToDo = ({ setIsModalDisplayed }) => {
  const [toDos, setToDos] = useState(initialToDos);

  return (
    <div className="todo-container">
      <ToDoColumn
        todo
        title="To Do"
        setIsModalDisplayed={setIsModalDisplayed}
      />
      <ToDoColumn inprogress title="In Progress" />
      <ToDoColumn done title="Done" />
    </div>
  );
};

export default ToDo;
