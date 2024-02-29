const deleteTodo = (index) => {
  const currentTodoList = [...todoList];
  const updatedTodoList = currentTodoList.filter(
    (todo, todoIndex) => todoIndex !== index
  );
  setTodoList(updatedTodoList);
};
