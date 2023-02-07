import TodoItem from "../todoItem/TodoItem";
import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";

const TodoList = () => {
  const context = useContext(ApplicationCtx);

  return (
    <div className={style.TodoList}>
      {/* <TodoItem
        data={{
          id: 1,
          content: "titolo",
          status: true,
        }}
      /> */}

      {context.state.todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
