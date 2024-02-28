import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="my-5">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center fw-light fs-6">About</h1>
        </div>
        <div className="col">
          <h1 className="text-center fw-light fs-6">GitHub</h1>
        </div>
        <div className="col">
          <h1 className="text-center fw-light fs-6">LinkedIn</h1>
        </div>
        <div className="col">
          <h1 className="text-center fw-light fs-6">Discord</h1>
        </div>
        <div className="col">
          <h1 className="text-center fw-light fs-6">Dribble</h1>
        </div>
      </div>
      <h1 className="text-center fw-light fs-6">
        @ 2024 Ariston Catipay™. All Rights Reserved.
      </h1>
    </Container>
  );
}

export default Footer;
