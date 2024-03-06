import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HustlerAward from "../assets/images/awards/Hustler Award.jpg";
import InternOfTheMonth from "../assets/images/awards/Intern of the month (IT).jpg";
import OutstandingResearchAward from "../assets/images/awards/Outstanding Research Award.jpg";

const Awards = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={12} lg className="my-auto">
            <h1 className="fw-bold fs-2 custom-gradient-pink">Hustler Award</h1>
            <p className="fw-light fs-5">
              I am truly honored to have received the Hustler Award, recognizing
              dedication and excellence in my work at WSAP. Throughout my
              internship, I tackled numerous tasks with unwavering commitment
              and a commitment to achieving the highest standards of
              performance.
            </p>
          </Col>
          <Col md={12} lg className="my-auto">
            <img
              src={HustlerAward}
              className="img-fluid"
              alt="Hustler Award"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col md={12} lg className="my-auto">
            <h1 className="fw-bold fs-2 custom-gradient-gold">
              Intern of the Month
            </h1>
            <p className="fw-light fs-5">
              I am honored to be selected as the Intern of the Month. This
              recognition underscores the effort and passion I put into my role
              at WSAP. I am proud to have contributed positively to the
              team&apos;s objectives and demonstrated consistent excellence
              throughout my internship
            </p>
          </Col>
          <Col md={12} lg className="my-auto">
            <img
              src={InternOfTheMonth}
              className="img-fluid"
              alt="Intern of the Month"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col md={12} lg className="my-auto">
            <h1 className="fw-bold fs-2 custom-gradient-blue-to-lime-green">
              Outstanding Research Award
            </h1>
            <p className="fw-light fs-5">
              I am deeply grateful to have received the Outstanding Research
              Award at the Research Colloquium. This honor stands as a testament
              to the hard work, resilience, and dedication poured into our
              thesis paper. Among all the fourth-year computer science students
              in the department, we were the first to complete our research
              paper.
            </p>
          </Col>
          <Col md={12} lg className="my-auto">
            <img
              src={OutstandingResearchAward}
              className="img-fluid"
              alt="Outstanding Research Award"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Awards;
