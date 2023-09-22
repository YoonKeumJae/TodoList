import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("My TodoList");
  const [inputValue, setInputValue] = useState("");

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(inputValue);
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
    <div>
      <h1>{title}</h1>
      <div>
        <form>
          <input type="text" placeholder="Input title" onChange={handleInput} />
          <button type="submit" onClick={handleTitle}>
            OK
          </button>
        </form>
        <button type="button" onClick={moveToList}>
          Move to List
        </button>
      </div>
    </div>
  );
};

export default Home;
