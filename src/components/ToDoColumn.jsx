import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import "./ToDoColumn.scss";

const ToDoColumn = ({ title, todo, setIsModalDisplayed }) => {
  const { toDos, setToDos } = useContext(TodosContext);

  return (
    <div className="todo-column-container">
      {todo ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ margin: "0" }}>{title}</h3>
          <button onClick={() => setIsModalDisplayed(true)}>Add Task</button>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};

export default ToDoColumn;
