import style from "./todoForm.module.css";

export default function TodoForm() {
  return (
    <form className={style.form}>
      <input className={style.input} type="text" name="content" title="todo" />
      <button className={style.add} type="submit" title="add">
        ADD
      </button>
    </form>
  );
}
