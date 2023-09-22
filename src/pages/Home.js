import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Home.scss";

const Home = () => {
  const [title, setTitle] = useState("My TodoList");
  const [inputValue, setInputValue] = useState("");

  const handleTitle = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("공백은 입력 불가입니다");
      document.querySelector(".input__title").value = "";
      return;
    }
    setTitle(inputValue.trim());
    document.querySelector(".input__title").value = "";
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const navigate = useNavigate();

  const moveToList = () => {
    navigate("/todos");
  };

  return (
    <div className="wrapper">
      <h1 className="title">{title}</h1>
      <div className="body__wrapper">
        <form className="inputForm">
          <input
            type="text"
            placeholder="Input title"
            onChange={handleInput}
            className="input__title"
          />
          <button type="submit" onClick={handleTitle} className="btn__title">
            OK
          </button>
        </form>
        <button type="button" onClick={moveToList} className="btn__move">
          Move to List
        </button>
      </div>
    </div>
  );
};

export default Home;
