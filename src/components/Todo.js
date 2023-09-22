import { useState } from "react";
import { patchTodos, deleteTodos } from "api";

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
    <div>
      <div className="todo">
        <span key={todo.id}>ID: {todo.id}</span>
        <br />
        <span>TASK: {todo.text}</span>
        <br />
        {done ? (
          <span onClick={onStatusEdit}>✅</span>
        ) : (
          <span onClick={onStatusEdit}>❎</span>
        )}
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
