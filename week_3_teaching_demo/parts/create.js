const createTodo = () => {
  const trimmedTodo = todo.trim();
  setTodoList([...todoList, trimmedTodo]);
  setTodo("");
};
