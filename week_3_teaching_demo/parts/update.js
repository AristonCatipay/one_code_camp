const updateTodo = (index) => {
  const trimmedUpdatedTodo = updatedTodo.trim();
  const updatedTodoList = [...todoList];
  updatedTodoList[index] = trimmedUpdatedTodo;
  setTodoList(updatedTodoList);
  setUpdatedTodo("");
  setTargetIndex(null);
};
