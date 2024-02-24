import style from "./todoForm.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../store/todo";

export default function TodoForm() {
  const dispatch = useDispatch();

  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const content = formData.get("content") as string;
    const input = e.currentTarget.elements.namedItem(
      "content"
    ) as HTMLInputElement;

    if (!!content) {
      dispatch(addItem(content));
      input.value = "";
    }
  };

  return (
    <form className={style.form} onSubmit={addHandler}>
      <input className={style.input} type="text" name="content" title="todo" />
      <button className={style.add} type="submit" title="add">
        ADD
      </button>
    </form>
  );
}
