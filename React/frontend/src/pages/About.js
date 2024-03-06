import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Python from "../assets/images/programming_languages/python.svg";
import Django from "../assets/images/programming_languages/django.svg";
import Flask from "../assets/images/programming_languages/flask.svg";
import FastAPI from "../assets/images/programming_languages/fastapi.svg";
import PHP from "../assets/images/programming_languages/php.svg";
import HTML from "../assets/images/programming_languages/html.svg";
import CSS from "../assets/images/programming_languages/css.svg";
import Javascript from "../assets/images/programming_languages/javascript.svg";
import Tailwind from "../assets/images/programming_languages/tailwind.svg";
import Flowbite from "../assets/images/programming_languages/flowbite.svg";
import Bootstrap from "../assets/images/programming_languages/bootstrap.svg";
import Dart from "../assets/images/programming_languages/dart.svg";
import Flutter from "../assets/images/programming_languages/flutter.svg";
import MySQL from "../assets/images/programming_languages/mysql.svg";
import Firebase from "../assets/images/programming_languages/firebase.svg";
import Git from "../assets/images/programming_languages/git.svg";
import Image from "../assets/images/about-me-image.png";

const About = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="">
          <Col md={12} lg className="my-auto">
            <h1 className="text-success fw-bold fs-5">Who am I?</h1>
            <h1 className="fw-bold fs-2">
              Hello! I am{" "}
              <span className="fw-bold custom-gradient-python-django">
                Ariston Catipay
              </span>
            </h1>
            <p className="fw-light fs-5">
              I am a dedicated, enthusiastic, and resilient software engineer
              from the Philippines who is committed to lifelong learning and
              continuous skill improvement. I excel in crafting user-centric
              applications and websites.
            </p>
          </Col>
          <Col md={12} lg className="my-auto d-flex justify-content-center">
            <img
              src={Image}
              className="custom-image img-fluid"
              alt="Profile"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="text-success fw-bold fs-5">What are my skills?</h1>
        <h1 className="fw-bold fs-2">Technologies and Programming Languages</h1>
        <p className="fw-light fs-5">
          I&apos;ve gained proficiency in a diverse set of programming languages
          and technologies. My skills and experience allows me to transform
          concepts into fully functional websites while prioritizing
          user-centric applications. Here are some of the key technologies
          I&apos;m skilled in.
        </p>
      </Container>
      <Container>
        <Row>
          <Col>
            <img src={Python} className="img-fluid" alt="Python" />
          </Col>
          <Col>
            <img
              src={Django}
              className="img-fluid"
              height="50"
              width="50"
              alt="Django"
            />
          </Col>
          <Col>
            <img
              src={Flask}
              className="img-fluid"
              height="50"
              width="50"
              alt="Flask"
            />
          </Col>
          <Col>
            <img
              src={FastAPI}
              className="img-fluid"
              height="50"
              width="50"
              alt="FastAPI"
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
              src={HTML}
              className="img-fluid"
              height="50"
              width="50"
              alt="HTML"
            />
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
        </Row>
        <Row>
          <Col>
            <img
              src={Tailwind}
              className="img-fluid"
              height="50"
              width="50"
              alt="Tailwind"
            />
          </Col>
          <Col>
            <img
              src={Flowbite}
              className="img-fluid"
              height="50"
              width="50"
              alt="Flowbite"
            />
          </Col>
          <Col>
            <img
              src={Bootstrap}
              className="img-fluid"
              height="50"
              width="50"
              alt="Bootstrap"
            />
          </Col>
          <Col>
            <img
              src={Dart}
              className="img-fluid"
              height="50"
              width="50"
              alt="Dart"
            />
          </Col>
          <Col>
            <img
              src={Flutter}
              className="img-fluid"
              height="50"
              width="50"
              alt="Flutter"
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
              src={Firebase}
              className="img-fluid"
              height="50"
              width="50"
              alt="Firebase"
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
        </Row>
      </Container>
    </>
  );
};

export default About;
