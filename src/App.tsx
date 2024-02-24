import style from "./app.module.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/List/TodoList";

function App() {
  return (
    <main className={style.main}>
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default App;
