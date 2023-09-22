import { getTodos } from "../api";
import { useState, useEffect } from "react";
import { Todo, TodoInput } from "../components";

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
    <div>
      <h1>Todos</h1>
      <div>
        <button type="button" onClick={viewForm}>
          ➕
        </button>
        {formVisible ? <TodoInput /> : null}
        <hr />
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
