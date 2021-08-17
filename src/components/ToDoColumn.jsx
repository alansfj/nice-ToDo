import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/ToDoColumn.scss";

const ToDoColumn = ({ title, todo, setIsModalDisplayed }) => {
  const { toDo, setToDo } = useContext(TodosContext);

  return (
    <div className="todo-column-container">
      {todo ? (
        <div className="todo-title-container">
          <h3 className="todo-title">{title}</h3>
          <button onClick={() => setIsModalDisplayed(true)}>Add Task</button>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};

export default ToDoColumn;
