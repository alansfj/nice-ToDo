import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import "../Sass/ToDoColumn.scss";
import Task from "./Task";

const ToDoColumn = ({
  title,
  todoColumn,
  inProgressColumn,
  doneColumn,
  setIsModalDisplayed,
}) => {
  const { toDo, setToDo, inProgress, setInProgress, done, setDone } =
    useContext(TodosContext);

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
          <button onClick={() => setIsModalDisplayed(true)}>Add Task</button>
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
            nextSetState={setDone}
            nextState={done}
            localStorageKey="inprogress"
            nextLocalStorageKey="done"
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
            localStorageKey="done"
            // nextSetState={setDone}
            // nextState={done}
          />
        ))}
    </div>
  );
};

export default ToDoColumn;
