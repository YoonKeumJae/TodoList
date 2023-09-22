const api_addr = "https://todo1-93739-default-rtdb.firebaseio.com/";

const getTodos = async () => {
  const response = await fetch(`${api_addr}todos.json`);
  const data = await response.json();
  return data;
};

const putTodos = async (todo) => {
  const response = await fetch(`${api_addr}todos/${todo.id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (response.ok) {
    return response.json();
  } else {
    console.log("error");
    throw new Error("Error");
  }
};

const patchTodos = async (todo) => {
  const response = await fetch(`${api_addr}todos/${todo.id}.json`, {
    method: "PATCH",
    body: JSON.stringify({ done: todo.done }),
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
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error");
  }
};

export { getTodos, putTodos, patchTodos, deleteTodos };
