const updateTodo = (index) => {
  if (updatedTodo.trim()) {
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = updatedTodo;
    setTodoList(updatedTodoList);
    setUpdatedTodo("");
    setTargetIndex(null);
  }
};
