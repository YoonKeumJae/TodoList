import { getTodos } from "../api";
import { useState, useEffect } from "react";
import { Todo, TodoInput } from "../components";
import "../styles/pages/Todos.scss";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const res = await getTodos();
        setTodos(res);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  const viewForm = () => {
    setFormVisible(!formVisible);
  };
  console.log(Object.values(todos));
  return (
    <div className="wrapper">
      <h1 className="title">Todos</h1>
      <div className="form">
        <button type="button" onClick={viewForm} className="btn__newTask">
          ➕ Click to add a new task!
        </button>
        {formVisible ? <TodoInput /> : null}
        <div className="todoList">
          {Object.values(todos).map((todo) => (
            <div>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
