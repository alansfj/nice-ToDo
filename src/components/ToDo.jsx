import React, { useContext } from "react";
import ToDoColumn from "./ToDoColumn";
import "../Sass/ToDo.scss";
import { TodosContext } from "../context/todosContext";

const ToDo = ({ setIsModalDisplayed }) => {
  return (
    <div className="todo-container">
      <ToDoColumn
        todoColumn
        title="To Do"
        setIsModalDisplayed={setIsModalDisplayed}
      />
      <ToDoColumn inProgressColumn title="In Progress" />
      <ToDoColumn doneColumn title="Done" />
    </div>
  );
};

export default ToDo;
