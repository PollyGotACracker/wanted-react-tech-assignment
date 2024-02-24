import style from "./todoItem.module.css";

export default function TodoItem() {
  return (
    <li className={style.item}>
      <div className={style.content}>list</div>
      <button className={style.delete} type="button" title="delete">
        &#10799;
      </button>
    </li>
  );
}
