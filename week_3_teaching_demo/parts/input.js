<Container>
  <InputGroup className="mb-3">
    <Form.Control
      placeholder="Add your task.."
      aria-label="Add your task.."
      aria-describedby="basic-addon2"
      type="text"
      value={todo}
      onChange={(event) => setTodo(event.target.value)}
    />
    <Button variant="success" id="button-addon2" onClick={createTodo}>
      Add Task
    </Button>
  </InputGroup>
</Container>;
