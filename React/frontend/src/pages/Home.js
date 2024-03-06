import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YGC from "../assets/images/companies/YGC.png";
import WSAP from "../assets/images/companies/WSAP.png";
import PMD from "../assets/images/companies/PMD.png";
import OCC from "../assets/images/companies/OCC.png";
import hero from "../assets/images/hero.svg";

const Home = () => {
  return (
    <div>
      <Container className="mb-5">
        <Row>
          <Col md={12} lg className="my-auto">
            <h1 className="fw-bold fs-2">
              Elevating Digital Experiences with{" "}
              <span className="custom-gradient-python-django">
                Python & Django{" "}
              </span>
              and <span className="custom-gradient-react-node">MERN </span>
              Stack Expertise.
            </h1>
            <p className="fw-light fs-5">
              Witness firsthand how Python, Django and MERN Stack expertise is
              the key to elevating your digital presence. Explore my portfolio
              and experience the difference.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://github.com/AristonCatipay"
                className="btn btn-lg btn-dark me-2"
              >
                <i className="bi bi-github mx-1"></i>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ariston-catipay/"
                className="btn btn-lg btn-primary ms-2"
              >
                <i className="bi bi-linkedin mx-1"></i>
                LinkedIn
              </a>
            </div>
          </Col>
          <Col md={12} lg className="my-auto">
            <img src={hero}></img>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row className="justify-content-between">
          <h1 className="text-success text-center fw-bold fs-3">Trusted By</h1>
          <Col className="col-2">
            <img
              src={WSAP}
              className="img-fluid"
              alt="Wedding Suppliers Association of the Philippines"
            />
          </Col>
          <Col className="col-2">
            <img
              src={YGC}
              className="img-fluid"
              alt="Yuson Group of Companies"
            />
          </Col>
          <Col className="col-2">
            <img
              src={PMD}
              className="img-fluid"
              alt="Philippine Malls Directory"
            />
          </Col>
          <Col className="col-2">
            <img src={OCC} className="img-fluid" alt="OneCodeCamp" />
          </Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          <Col md={12} lg className="my-auto">
            <p className="text-success fw-bold fs-5">Professional Experience</p>
            <h2 className="fw-bold fs-2">
              Python and Django Developer: Transforming Ideas into{" "}
              <span className="custom-gradient-python-django">
                Functional Websites.
              </span>
            </h2>
            <p className="fw-light fs-5">
              I specialize in crafting{" "}
              <span className="fw-bold fs-5">user-centric applications</span>{" "}
              and <span className="fw-bold fs-5">websites</span>, leveraging my
              experience in web development to bring ideas to life.
            </p>
          </Col>
          <Col md={12} lg className="my-auto">
            <Row>
              <Col>
                <i className="bi bi-rocket-takeoff-fill fw-bold fs-1 custom-gradient-python-django"></i>
                <h3 className="fw-bold fs-3">3 Websites</h3>
                <p className="fw-light fs-5">
                  Successfully deployed websites that are still used today
                </p>
              </Col>
              <Col>
                <i className="bi bi-briefcase-fill fw-bold fs-1 custom-gradient-python-django"></i>
                <h3 className="fw-bold fs-3">240+ Hours</h3>
                <p className="fw-light fs-5">
                  Professional experience in my last internship at WSAP
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <i className="bi bi-box-fill fw-bold fs-1 custom-gradient-python-django"></i>
                <h3 className="fw-bold fs-3">6 Projects</h3>
                <p className="fw-light fs-5">
                  Currently working on personal open source projects
                </p>
              </Col>
              <Col>
                <i className="bi bi-award-fill fw-bold fs-1 custom-gradient-python-django"></i>
                <h3 className="fw-bold fs-3">3 Awards</h3>
                <p className="fw-light fs-5">
                  Received from internship and thesis paper
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
