import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Awards from "./pages/Awards";
import BlogPost from "./pages/BlogPosts";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/awards" element={<Awards />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog/" element={<BlogPost />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/register/" element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
