import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
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
  prevState,
  prevSetState,
  isToDoColumn,
  isDoneColumn,
  localStorageKey,
  nextLocalStorageKey,
  prevLocalStorageKey,
}) => {
  // const { inProgress, setInProgress } = useContext(TodosContext);

  const { themes, theme } = useContext(ThemeContext);

  const changeColumn = (to, id, nextSetState) => {
    deleteTask(id, state, setState, localStorageKey);

    if (to === "next") {
      const nextColumnData = [...nextState, el];
      nextSetState(nextColumnData);
      localStorage.setItem(nextLocalStorageKey, JSON.stringify(nextColumnData));
    }
    if (to === "prev") {
      const nextColumnData = [...prevState, el];
      prevSetState(nextColumnData);
      localStorage.setItem(prevLocalStorageKey, JSON.stringify(nextColumnData));
    }
  };

  return (
    <div
      className="task-container"
      style={{
        borderBottomColor:
          `${themes[localStorage.getItem("theme")]}` || `${themes[theme]}`,
      }}
    >
      <p
        style={{
          backgroundColor:
            `${themes[localStorage.getItem("theme")]}` || `${themes[theme]}`,
        }}
      >
        {text}
      </p>
      <div className="btns-container">
        <div className="left-btns-container">
          <button
            onClick={() => deleteTask(id, state, setState, localStorageKey)}
          >
            X
          </button>
        </div>
        <div className="right-btns-container">
          {!isToDoColumn && (
            <button
              onClick={() => changeColumn("prev", id, nextSetState, nextState)}
            >
              {"<-"}
            </button>
          )}
          {!isDoneColumn && (
            <button
              onClick={() => changeColumn("next", id, nextSetState, nextState)}
            >
              {"->"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
