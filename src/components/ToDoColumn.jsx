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

  const deleteTask = (id, state, setState) => {
    // let isDelete = window.confirm(
    //   `¿Estás seguro de eliminar el registro con el id '${id}'?`
    // );

    // if (isDelete) {
    //   let newData = db.filter(el => el.id !== id);
    //   setDb(newData);
    // } else {
    //   return;
    // }

    let newData = state.filter(el => el.id !== id);
    setState(newData);
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
            // nextSetState={setDone}
            // nextState={done}
          />
        ))}
    </div>
  );
};

export default ToDoColumn;
