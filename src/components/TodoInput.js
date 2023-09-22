import { putTodos } from "api";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const newId = uuidv4();

  const onClickSubmit = (e) => {
    e.preventDefault();
    putTodos({
      id: newId,
      text: todo,
      done: false,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="I have to do..."
          onChange={todoChangeHandler}
        ></input>
        <button type="submit" onClick={onClickSubmit}>
          OK
        </button>
      </form>
    </div>
  );
};
export default TodoInput;
