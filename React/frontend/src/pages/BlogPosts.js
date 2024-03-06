// App.js
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostCard from "../components/BlogPostCard";
import CreateBlog from "./CreateBlog";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await Axios.get("http://localhost:4000/api/posts");
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Container>
        <CreateBlog setPosts={setPosts} />
        <Row>
          {posts.map((post, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <BlogPostCard post={post} setPosts={setPosts} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
