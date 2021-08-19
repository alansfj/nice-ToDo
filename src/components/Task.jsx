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
  localStorageKey,
  nextLocalStorageKey,
}) => {
  // const { inProgress, setInProgress } = useContext(TodosContext);

  const changeColumn = (id, nextSetState) => {
    deleteTask(id, state, setState, localStorageKey);
    // inProgress.push(el);
    // nextSetState([]);

    const nextColumnData = [...nextState, el];
    nextSetState(nextColumnData);
    localStorage.setItem(nextLocalStorageKey, JSON.stringify(nextColumnData));
  };

  return (
    <div className="task-container">
      <p>{text}</p>
      <div className="btns-container">
        <div className="left-btns-container">
          <button
            onClick={() => deleteTask(id, state, setState, localStorageKey)}
          >
            X
          </button>
        </div>
        <div className="right-btns-container">
          {!isDoneColumn && (
            <button onClick={() => changeColumn(id, nextSetState, nextState)}>
              {"->"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
