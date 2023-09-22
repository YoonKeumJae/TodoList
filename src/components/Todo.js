import { useState } from "react";
import { patchTodos, deleteTodos } from "api";
import "../styles/components/Todo.scss";

const Todo = ({ todo, update }) => {
  const [done, setDone] = useState(todo.done);

  const onStatusEdit = (e) => {
    e.preventDefault();
    patchTodos({
      id: todo.id,
      text: todo.text,
      done: !done,
    });
    setDone(!done);
    update();
  };

  const onDelete = (e) => {
    e.preventDefault();
    deleteTodos(todo.id);
    update();
  };

  return (
    <div className="wrapper__todo">
      <div className="todo">
        {done ? (
          <span onClick={onStatusEdit}>✅</span>
        ) : (
          <span onClick={onStatusEdit}>❎</span>
        )}
        <span className="task">{todo.text}</span>
        <button type="button" onClick={onDelete} className="btn__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
