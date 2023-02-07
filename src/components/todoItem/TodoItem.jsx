import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";

const TodoItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({
      type: "REMOVE_TODO_ITEM_COMPLETED_FROM_LIST",
      payload: data.content,
    });
  };

  return (
    <div
      className={`${style.TodoItem} ${!data.status && style.satusDone}`}
      onclick={onHandleClick}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default TodoItem;
