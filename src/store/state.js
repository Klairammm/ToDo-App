import { createContext } from "react";

const initialState = {
  todoList: [
    { id: "1", content: "cooking", status: false },
    { id: "2", content: "studying", status: true },
  ],
};

const ApplicationCtx = createContext(initialState);
export { ApplicationCtx, initialState };
