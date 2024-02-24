import style from "./todoItem.module.css";
import { useDispatch } from "react-redux";
import { TodoItemType, deleteItem } from "../../store/todo";
import { motion } from "framer-motion";

export default function TodoItem({ id, content }: TodoItemType) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteItem(id));
  };

  const motionProps = {
    layout: true,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      opacity: { ease: "linear" },
      layout: { duration: 0.3 },
    },
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
      },
    },
  };

  return (
    <motion.li className={style.item} {...motionProps}>
      <div className={style.content}>{content}</div>
      <button
        className={style.delete}
        type="button"
        title="delete"
        onClick={deleteHandler}
      >
        &#10799;
      </button>
    </motion.li>
  );
}
