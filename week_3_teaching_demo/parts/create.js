const createTodo = () => {
  if (todo.trim()) {
    setTodoList([...todoList, todo]);
    setTodo("");
  }
};
