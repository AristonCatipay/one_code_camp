import React from "react";
import Container from "react-bootstrap/Container";
import YGC from "../assets/images/companies/YGC.png";
import WSAP from "../assets/images/companies/WSAP.png";
import PMD from "../assets/images/companies/PMD.png";

const Home = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center fw-bold fs-2">
          Elevating Digital Experiences with{" "}
          <span className="text-success">Python and Django Expertise. </span>
        </h1>
        <p className="text-center fw-light fs-4">
          Witness firsthand how Python and Django expertise is the key to
          elevating your digital presence. Explore my portfolio and experience
          the difference.
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/AristonCatipay"
            className="btn btn-lg btn-outline-success mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ariston-catipay/"
            className="btn btn-lg btn-outline-success mx-2"
          >
            LinkedIn
          </a>
        </div>
      </Container>
      <Container className="my-5">
        <div className="row justify-content-center">
          <div className="col col-2">
            <img
              src={WSAP}
              className="img-fluid"
              alt="Wedding Suppliers Association of the Philippines"
            />
          </div>
          <div className="col col-2">
            <img
              src={YGC}
              className="img-fluid"
              alt="Yuson Group of Companies"
            />
          </div>
          <div className="col col-2">
            <img
              src={PMD}
              className="img-fluid"
              alt="Philippine Malls Directory"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
