import style from "./style.module.scss";
import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store/state";

const Navbar = () => {
  const [input, setInput] = useState("");

  const { dispatch } = useContext(ApplicationCtx);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      action: "ADD_TODO_ITEM_TO_LIST",
      payload: {
        id: Math.floor(Math.random() * 100000),
        content: input,
        status: false,
      },
    });
    setInput(() => "");
  };
  return (
    <div className={style.Navbar}>
      <form onSubmit={() => {}}>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(() => e.target.value)}
          placeholder="Aggiungi.."
        />
      </form>
    </div>
  );
};
export default Navbar;
