import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Python from "../assets/images/programming_languages/python.svg";
import Django from "../assets/images/programming_languages/django-v2.svg";
import Flask from "../assets/images/programming_languages/flask-v2.svg";
import FastAPI from "../assets/images/programming_languages/fastapi.svg";
import PHP from "../assets/images/programming_languages/php.svg";
import HTML from "../assets/images/programming_languages/html.svg";
import CSS from "../assets/images/programming_languages/css.svg";
import Javascript from "../assets/images/programming_languages/javascript.svg";
import Tailwind from "../assets/images/programming_languages/tailwind-css.svg";
import Flowbite from "../assets/images/programming_languages/flowbite-logo.svg";
import Bootstrap from "../assets/images/programming_languages/bootstrap.svg";
import Dart from "../assets/images/programming_languages/dart.svg";
import Flutter from "../assets/images/programming_languages/flutter.svg";
import MySQL from "../assets/images/programming_languages/mysql.svg";
import Firebase from "../assets/images/programming_languages/firebase.svg";
import Git from "../assets/images/programming_languages/git.svg";
import GitHub from "../assets/images/programming_languages/github.svg";
import Notion from "../assets/images/programming_languages/notion.svg";

const Experience = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">
          Yuson Group of Companies - Knowledge Base
        </h1>
        <p className="fw-light fs-4">
          Is a customer relationship management (CRM) system that stores crucial
          data for managing all of the company's relationships and interactions
          with current and potential customers. It stores not just all of the
          Yuson Group of Companies' brands, but also the databases of each WSAP
          department.
        </p>
      </Container>
      <Container className="my-5">
        <h1 className="text-success text-success fw-bold fs-5">
          Technologies and Programming Languages
        </h1>
        <Row>
          <Col>
            <img src={HTML} className="img-fluid" alt="HTML" />
          </Col>
          <Col>
            <img
              src={CSS}
              className="img-fluid"
              height="50"
              width="50"
              alt="CSS"
            />
          </Col>
          <Col>
            <img
              src={Javascript}
              className="img-fluid"
              height="50"
              width="50"
              alt="Javascript"
            />
          </Col>
          <Col>
            <img
              src={PHP}
              className="img-fluid"
              height="50"
              width="50"
              alt="PHP"
            />
          </Col>
          <Col>
            <img
              src={MySQL}
              className="img-fluid"
              height="50"
              width="50"
              alt="MySQL"
            />
          </Col>
          <Col>
            <img
              src={Git}
              className="img-fluid"
              height="50"
              width="50"
              alt="Git"
            />
          </Col>
          <Col>
            <img
              src={GitHub}
              className="img-fluid"
              height="50"
              width="50"
              alt="GitHub"
            />
          </Col>
          <Col>
            <img
              src={Notion}
              className="img-fluid"
              height="50"
              width="50"
              alt="Notion"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">TJ Yuson's - Personal Portfolio</h1>
        <p className="fw-light fs-4">
          During the last week of my internship, TJ Yuson's personal portfolio
          were assigned to the Web Development Team. Our CEO, Mr. TJ Yuson,
          requested that we design and develop his own portfolio, which would
          showcase all of his accomplishments, brands, and advocacies.
        </p>
      </Container>
      <Container className="my-5">
        <h1 className="text-success text-success fw-bold fs-5">
          Technologies and Programming Languages
        </h1>
        <Col className="row justify-content-center">
          <Col>
            <img src={HTML} className="img-fluid" alt="HTML" />
          </Col>
          <Col>
            <img
              src={CSS}
              className="img-fluid"
              height="50"
              width="50"
              alt="CSS"
            />
          </Col>
          <Col>
            <img
              src={Javascript}
              className="img-fluid"
              height="50"
              width="50"
              alt="Javascript"
            />
          </Col>
          <Col>
            <img
              src={PHP}
              className="img-fluid"
              height="50"
              width="50"
              alt="PHP"
            />
          </Col>
          <Col>
            <img
              src={MySQL}
              className="img-fluid"
              height="50"
              width="50"
              alt="MySQL"
            />
          </Col>
          <Col>
            <img
              src={Git}
              className="img-fluid"
              height="50"
              width="50"
              alt="Git"
            />
          </Col>
          <Col>
            <img
              src={GitHub}
              className="img-fluid"
              height="50"
              width="50"
              alt="GitHub"
            />
          </Col>
          <Col>
            <img
              src={Notion}
              className="img-fluid"
              height="50"
              width="50"
              alt="Notion"
            />
          </Col>
        </Col>
      </Container>
    </>
  );
};

export default Experience;
