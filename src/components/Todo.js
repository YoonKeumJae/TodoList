import { useState } from "react";
import { patchTodos, deleteTodos } from "api";
import "../styles/components/Todo.scss";

const Todo = ({ todo }) => {
  const [done, setDone] = useState(todo.done);

  const onStatusEdit = (e) => {
    e.preventDefault();
    patchTodos({
      id: todo.id,
      text: todo.text,
      done: !done,
    });
    setDone(!done);
  };

  const onDelete = (e) => {
    e.preventDefault();
    deleteTodos(todo.id);
    console.log("deleted");
    console.log(todo.id);
  };

  return (
    <div className="wrapper__todo">
      <div className="todo">
        {done ? (
          <span onClick={onStatusEdit}>✅</span>
        ) : (
          <span onClick={onStatusEdit}>❎</span>
        )}
        <span className="task">TASK: {todo.text}</span>
        <button type="button" onClick={onDelete} className="btn__delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
