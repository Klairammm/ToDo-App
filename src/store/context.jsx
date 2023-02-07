import { createContext, useReducer } from "react";
import { initialState } from "./state";
import mainReducer from "./reducer";

export const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
