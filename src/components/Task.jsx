import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/Task.scss";

const Task = ({
  text,
  el,
  id,
  deleteTask,
  state,
  setState,
  nextSetState,
  nextState,
  isDoneColumn,
}) => {
  const { inProgress, setInProgress } = useContext(TodosContext);

  const changeColumn = (id, nextSetState) => {
    deleteTask(id, state, setState);
    // inProgress.push(el);
    nextSetState([...nextState, el]);
  };

  return (
    <div className="task-container">
      <p>{text}</p>
      <div className="left-btns-container">
        <button onClick={() => deleteTask(id, state, setState)}>X</button>
        {!isDoneColumn && (
          <button onClick={() => changeColumn(id, nextSetState, nextState)}>
            {"->"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
