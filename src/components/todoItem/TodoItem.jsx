import style from "./style.module.scss";
import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: data.id,
    });
  };

  return (
    <div className={`${style.TodoItem} ${data.status && style.statusDone}`}>
      <p onclick={onHandleClick}>{data.content}</p>
    </div>
  );
};

export default TodoItem;
