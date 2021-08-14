import React, { createContext, useState } from "react";

const TodosContext = createContext();

const initialToDos = {
  todo: {},
  inprogress: {},
  done: {},
};

const TodosProvider = ({ children }) => {
  const [toDos, setToDos] = useState(initialToDos);

  const data = { toDos, setToDos };

  return <TodosContext.Provider value={data}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
export { TodosContext };
