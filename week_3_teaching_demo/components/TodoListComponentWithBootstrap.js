import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TodoListComponent = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [targetIndex, setTargetIndex] = useState(null);

  const createTodo = () => {
    const trimmedTodo = todo.trim();
    setTodoList([...todoList, trimmedTodo]);
    setTodo("");
  };

  const updateTodo = (index) => {
    const trimmedUpdatedTodo = updatedTodo.trim();
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = trimmedUpdatedTodo;
    setTodoList(updatedTodoList);
    setUpdatedTodo("");
    setTargetIndex(null);
  };

  const deleteTodo = (index) => {
    const currentTodoList = [...todoList];
    const updatedTodoList = currentTodoList.filter(
      (todo, todoIndex) => todoIndex !== index
    );
    setTodoList(updatedTodoList);
  };

  return (
    <>
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
      </Container>
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
      </Container>
    </>
  );
};

export default TodoListComponent;
