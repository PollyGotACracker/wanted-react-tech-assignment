import style from "./todoList.module.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function TodoList() {
  const list = useSelector((state: RootState) => state.todo.list);

  return (
    <section className={style.wrapper}>
      <ul className={style.list}>
        {list.map(({ id, content }) => (
          <TodoItem key={id} id={id} content={content} />
        ))}
      </ul>
    </section>
  );
}
