const Todos = () => {
  return (
    <div>
      <h1>Todos</h1>
      <div>
        <ul className="todoList">
          <li className="todo">
            <span>Todo1</span>
            <button type="button">Delete</button>
            <button type="button">Edit</button>
          </li>
        </ul>
        <button type="button">Add Todo</button>
      </div>
    </div>
  );
};

export default Todos;
