import React from "react";
import "./ToDo.scss";
import ToDoColumn from "./ToDoColumn";

const ToDo = ({ setIsModalDisplayed }) => {
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
