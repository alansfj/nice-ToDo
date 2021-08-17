import React, { createContext, useState } from "react";

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const data = {
    toDo,
    setToDo,
    inProgress,
    setInProgress,
    done,
    setDone,
  };

  return <TodosContext.Provider value={data}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
export { TodosContext };
