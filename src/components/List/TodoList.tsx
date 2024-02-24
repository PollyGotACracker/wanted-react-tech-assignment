import style from "./todoList.module.css";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList() {
  const list = useSelector((state: RootState) => state.todo.list);

  const motionProps = {
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
  };

  return (
    <section className={style.wrapper}>
      <motion.ul className={style.list} {...motionProps}>
        <AnimatePresence mode="sync">
          {list.map(({ id, content }) => (
            <TodoItem key={id} id={id} content={content} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
