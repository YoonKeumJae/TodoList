import { getTodos } from "../api";
import { useState, useEffect } from "react";
import { Todo, TodoInput } from "../components";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Todos.scss";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      try {
        const res = await getTodos();
        if (res === null) {
          const newId = uuidv4();
          return [
            ...todos,
            { id: newId, text: "아직 아무것도 없어요!", done: false },
          ];
        }
        setTodos(res);
      } catch (e) {
        console.error(e);
      }
    };
    updateData();
  }, [todos]);

  const viewForm = () => {
    setFormVisible(!formVisible);
  };

  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1 className="title">Todos</h1>
      <button type="button" onClick={() => navigate("/")}>뒤로가기</button>
      <div className="form">
        <button type="button" onClick={viewForm} className="btn__newTask">
          ➕ Click to add a new task!
        </button>
        {formVisible ? <TodoInput /> : null}
        <div className="todoList">
          {Object.values(todos).map((todo) => (
            <div key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
