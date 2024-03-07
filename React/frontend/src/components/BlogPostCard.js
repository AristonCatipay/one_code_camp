import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import Axios from "axios";

const BlogPostCard = ({ post, setPosts }) => {
  const {
    _id,
    title: initialTitle,
    author: initialAuthor,
    description: initialDescription,
  } = post;
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [description, setDescription] = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await Axios.delete(
        `http://localhost:4000/api/posts/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== _id));
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await Axios.put(
        `http://localhost:4000/api/posts/${_id}`,
        {
          title,
          author,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Post updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating post:", error.message);
    }
  };

  return (
    <div className="m-3">
      <Card>
        <Card.Body>
          {isEditing ? (
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Button
                className="mx-2 my-4"
                variant="success"
                onClick={handleSave}
              >
                <i className="bi bi-floppy2-fill mx-1"></i>
                Save
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() => setIsEditing(false)}
              >
                <i className="bi bi-x-lg mx-1"></i>Close
              </Button>
            </Form>
          ) : (
            <>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Author: {author}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Button className="mx-2" variant="warning" onClick={handleEdit}>
                <i className="bi bi-pencil-square mx-1"></i>
                Edit
              </Button>
              <Button className="mx-2" variant="danger" onClick={handleDelete}>
                <i className="bi bi-trash-fill mx-1"></i>
                Delete
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogPostCard;
