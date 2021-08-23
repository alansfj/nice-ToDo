import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/ToDoColumn.scss";
import Task from "./Task";
import Add from "../icons/Add";
import { ThemeContext } from "../context/themeContext";

const ToDoColumn = ({
  title,
  todoColumn,
  inProgressColumn,
  doneColumn,
  setIsModalDisplayed,
}) => {
  const { toDo, setToDo, inProgress, setInProgress, done, setDone } =
    useContext(TodosContext);

  const { themes } = useContext(ThemeContext);

  const deleteTask = (id, state, setState, localStorageKey) => {
    let newData = state.filter(el => el.id !== id);
    setState(newData);

    if (localStorageKey) {
      localStorage.setItem(localStorageKey, JSON.stringify(newData));
    }
  };

  return (
    <div className="todo-column-container">
      {todoColumn ? (
        <div className="todo-title-container">
          <h3 className="todo-title">{title}</h3>
          <div
            className="add-task-div"
            onClick={() => setIsModalDisplayed(true)}
            style={{
              border: `2px solid ${themes[localStorage.getItem("theme")]}`,
              fontSize: ".9rem",
            }}
          >
            <Add />
            <p>Add Task</p>
          </div>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
      {todoColumn &&
        toDo.map(el => (
          <Task
            key={el.id}
            el={el}
            text={el.task}
            id={el.id}
            deleteTask={deleteTask}
            state={toDo}
            setState={setToDo}
            nextSetState={setInProgress}
            nextState={inProgress}
            localStorageKey="todo"
            nextLocalStorageKey="inprogress"
            isToDoColumn
          />
        ))}

      {inProgressColumn &&
        inProgress.map(el => (
          <Task
            key={el.id}
            el={el}
            text={el.task}
            id={el.id}
            deleteTask={deleteTask}
            state={inProgress}
            setState={setInProgress}
            nextState={done}
            nextSetState={setDone}
            prevState={toDo}
            prevSetState={setToDo}
            localStorageKey="inprogress"
            nextLocalStorageKey="done"
            prevLocalStorageKey="todo"
          />
        ))}

      {doneColumn &&
        done.map(el => (
          <Task
            key={el.id}
            el={el}
            text={el.task}
            id={el.id}
            deleteTask={deleteTask}
            state={done}
            setState={setDone}
            isDoneColumn
            prevState={inProgress}
            prevSetState={setInProgress}
            localStorageKey="done"
            prevLocalStorageKey="inprogress"

            // nextSetState={setDone}
            // nextState={done}
          />
        ))}
    </div>
  );
};

export default ToDoColumn;
