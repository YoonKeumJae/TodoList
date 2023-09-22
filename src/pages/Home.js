import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("My TodoList");

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <form>
          <input type="text" placeholder="Input title" />
          <button type="submit" onClick={handleTitle}>
            OK
          </button>
        </form>
        <button type="button">Move to List</button>
      </div>
    </div>
  );
};

export default Home;
