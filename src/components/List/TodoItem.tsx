import style from "./todoItem.module.css";
import { useDispatch } from "react-redux";
import { TodoItemType, deleteItem } from "../../store/todo";

export default function TodoItem({ id, content }: TodoItemType) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteItem(id));
  };

  return (
    <li className={style.item}>
      <div className={style.content}>{content}</div>
      <button
        className={style.delete}
        type="button"
        title="delete"
        onClick={deleteHandler}
      >
        &#10799;
      </button>
    </li>
  );
}
