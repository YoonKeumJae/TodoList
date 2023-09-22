import { useState } from "react";

const Todo = ({ todo }) => {
  const [todoText, setTodoText] = useState(todo.text);
  const [done, setDone] = useState(false);

  const editTodo = (e) => {
    e.preventDefault();
    setTodoText(e.target.value);
  };

  const changeTodoStatus = (e) => {
    e.preventDefault();
    setDone(!done);
  };

  return (
    <li>
      <li className="todo">
        <span>{todo.id}</span>
        <span>{todoText}</span>
        {done ? (
          <span onClick={changeTodoStatus}>✅</span>
        ) : (
          <span onClick={changeTodoStatus}>❎</span>
        )}
        <button type="button">Delete</button>
        <button type="button" onClick={editTodo}>
          Edit
        </button>
      </li>
    </li>
  );
};

export default Todo;
