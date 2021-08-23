import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "../Sass/Task.scss";
import Delete from "../icons/Delete";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

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
            style={{
              border: `2px solid ${themes[localStorage.getItem("theme")]}`,
              fontSize: "1rem",
            }}
            onClick={() => deleteTask(id, state, setState, localStorageKey)}
          >
            <div>
              <Delete />
            </div>
          </button>
        </div>
        <div className="right-btns-container">
          {!isToDoColumn && (
            <button
              style={{
                border: `2px solid ${themes[localStorage.getItem("theme")]}`,
                fontSize: "1rem",
              }}
              onClick={() => changeColumn("prev", id, nextSetState, nextState)}
            >
              <div>
                <LeftArrow />
              </div>
            </button>
          )}
          {!isDoneColumn && (
            <button
              style={{
                border: `2px solid ${themes[localStorage.getItem("theme")]}`,
                fontSize: "1rem",
                marginLeft: "5px",
              }}
              onClick={() => changeColumn("next", id, nextSetState, nextState)}
            >
              <div>
                <RightArrow />
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
