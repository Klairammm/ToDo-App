import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todoList/TodoList";
import { ApplicationCtx, initialState } from "./store/state";
import { useReducer } from "react";
import mainReducer from "./store/reducer";

function App() {
  //destruttura un valore di ritorno e prende
  //prima un reducer e poi uno stato
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ApplicationCtx.Provider
      value={() => {
        state, dispatch;
      }}
    >
      <div className="App">
        <Navbar />
        <TodoList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;
