const api_addr = "https://todo1-93739-default-rtdb.firebaseio.com/";

const getTodos = async () => {
  const response = await fetch(`${api_addr}todos.json`);
  const data = await response.json();
  return data;
};

const putTodos = async (todo) => {
  const response = await fetch(`${api_addr}todos.json`, {
    method: "POST",
    body: JSON.stringify(todo),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error");
  }
};

const fetchTodos = async (id) => {
  const response = await fetch(`${api_addr}todos/${id}.json`, {
    method: "PUT",
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error");
  }
};

const deleteTodos = async (id) => {
  const response = await fetch(`${api_addr}todos/${id}.json`, {
    method: "DELETE",
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error");
  }
};

export { getTodos, putTodos, fetchTodos, deleteTodos };
