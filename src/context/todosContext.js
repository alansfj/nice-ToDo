import React, { createContext, useState } from "react";

const TodosContext = createContext();

const initialToDos = {
  todo: [],
  inprogress: [],
  done: [],
};

const TodosProvider = ({ children }) => {
  const [toDo, setToDo] = useState(initialToDos.todo);
  const [inProgress, setInProgress] = useState(initialToDos.inprogress);
  const [done, setDone] = useState(initialToDos.done);

  const data = { toDo, setToDo, inProgress, setInProgress, done, setDone };

  return <TodosContext.Provider value={data}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
export { TodosContext };
