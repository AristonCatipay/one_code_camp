// CreateBlog.js
import React, { useState } from "react";
import Axios from "axios";
import { Container, Form, Button, Modal, Alert } from "react-bootstrap";

const CreateBlog = ({ setPosts }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Axios.post("http://localhost:4000/api/posts", {
        title,
        author,
        description,
      });
      console.log("Response data:", data);

      clearFormFields();
      setSuccessMessage("Blog post created successfully");
      setShowModal(false);
      setPosts((prevPosts) => [...prevPosts, data]);
    } catch (error) {
      handlePostError(error);
    }
  };

  const clearFormFields = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
  };

  const handlePostError = (error) => {
    setErrorMessage("Error creating blog post");
    console.error("Error creating blog post:", error.message);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container className="my-5">
      <Button variant="primary" onClick={toggleModal}>
        Create New Post
      </Button>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="What's on your mind?"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CreateBlog;
