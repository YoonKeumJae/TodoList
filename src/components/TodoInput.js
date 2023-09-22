import { putTodos } from "api";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/components/TodoInput.scss";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const todoChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const newId = uuidv4();

  const onClickSubmit = (e) => {
    if (todo === "") {
      alert("공백은 입력 불가입니다");
      return;
    }
    e.preventDefault();
    putTodos({
      id: newId,
      text: todo.trim(),
      done: false,
    });
    document.querySelector(".input__text").value = "";
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="I have to do..."
        onChange={todoChangeHandler}
        className="input__text"
      ></input>
      <button type="submit" onClick={onClickSubmit}>
        OK
      </button>
    </form>
  );
};
export default TodoInput;
