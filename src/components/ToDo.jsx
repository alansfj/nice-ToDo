import React from "react";
import ToDoColumn from "./ToDoColumn";
import "../Sass/ToDo.scss";

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
