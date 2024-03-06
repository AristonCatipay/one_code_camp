import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Python from "../assets/images/programming_languages/python.svg";
import Django from "../assets/images/programming_languages/django.svg";
// import Flask from "../assets/images/programming_languages/flask.svg";
// import FastAPI from "../assets/images/programming_languages/fastapi.svg";
// import PHP from "../assets/images/programming_languages/php.svg";
import HTML from "../assets/images/programming_languages/html.svg";
import CSS from "../assets/images/programming_languages/css.svg";
// import Javascript from "../assets/images/programming_languages/javascript.svg";
import Tailwind from "../assets/images/programming_languages/tailwind.svg";
import Flowbite from "../assets/images/programming_languages/flowbite.svg";
// import Bootstrap from "../assets/images/programming_languages/bootstrap.svg";
// import Dart from "../assets/images/programming_languages/dart.svg";
// import Flutter from "../assets/images/programming_languages/flutter.svg";
import MySQL from "../assets/images/programming_languages/mysql.svg";
// import Firebase from "../assets/images/programming_languages/firebase.svg";
import Git from "../assets/images/programming_languages/git.svg";

const Portfolio = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">Connectify - Social Media Website</h1>
        <p className="fw-light fs-5">
          Connectify is a lively Django-based social media application that
          offers users a seamless platform to connect with friends and family.
          With user-friendly features, our application makes it easy to
          establish and maintain connections. Additionally, Connectify includes
          a messaging functionality, enabling users to stay in touch and share
          moments in real-time.
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
              src={Tailwind}
              className="img-fluid"
              height="50"
              width="50"
              alt="TailwindCSS"
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
              src={Python}
              className="img-fluid"
              height="50"
              width="50"
              alt="Python"
            />
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
        </Row>
      </Container>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">
          HandMeDown - Online Marketplace Website
        </h1>
        <p className="fw-light fs-5">
          HandMeDown is a Django-powered Online Marketplace where users can
          effortlessly sell and discover preloved items. Our user-friendly
          platform encourages direct communication through a messaging system,
          allowing buyers and sellers to negotiate prices and finalize
          transactions.
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
              src={Tailwind}
              className="img-fluid"
              height="50"
              width="50"
              alt="TailwindCSS"
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
              src={Python}
              className="img-fluid"
              height="50"
              width="50"
              alt="Python"
            />
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
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
