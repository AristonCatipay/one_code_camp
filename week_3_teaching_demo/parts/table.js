<Container>
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Index</th>
        <th>Todo</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todoList.map((todo, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>
            {targetIndex === index ? (
              <input
                type="text"
                value={updatedTodo}
                onChange={(event) => setUpdatedTodo(event.target.value)}
              />
            ) : (
              todo
            )}
          </td>
          <td>
            {targetIndex === index ? (
              <Button variant="warning" onClick={() => updateTodo(index)}>
                Save
              </Button>
            ) : (
              <Button
                variant="warning"
                onClick={() => {
                  setUpdatedTodo(todo);
                  setTargetIndex(index);
                }}
              >
                Edit
              </Button>
            )}
          </td>
          <td>
            <Button onClick={() => deleteTodo(index)} variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
</Container>;
