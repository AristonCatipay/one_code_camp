import React, { useState } from "react";
import Axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:4000/api/users/login",
        {
          username,
          password,
        }
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      setSuccessMessage("Login Successful!");
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginError = (error) => {
    setErrorMessage("Login Failed: " + error.response.data.error);
    console.error("Login Error:", error.message);
  };

  return (
    <>
      <Container>
        {successMessage && (
          <Alert key="success" variant="success">
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert key="danger" variant="danger">
            {errorMessage}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="john.doe"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*******************"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
