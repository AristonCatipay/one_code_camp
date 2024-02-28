import React from "react";
import Container from "react-bootstrap/Container";

const Awards = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">Outstanding Research Award</h1>
        <p className="fw-light fs-4">
          I am deeply grateful to have received the Outstanding Research Award
          at the Research Colloquium. This honor stands as a testament to the
          hard work, resilience, and dedication poured into our thesis paper.
          Among all the fourth-year computer science students in the department,
          we were the first to complete our research paper.
        </p>
      </Container>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">Hustler Award</h1>
        <p className="fw-light fs-4">
          I am truly honored to have received the Hustler Award, recognizing
          dedication and excellence in my work at WSAP. Throughout my
          internship, I tackled numerous tasks with unwavering commitment and a
          commitment to achieving the highest standards of performance.
        </p>
      </Container>
      <Container className="my-5">
        <h1 className="fw-bold fs-2">Intern of the Month</h1>
        <p className="fw-light fs-4">
          I am honored to be selected as the Intern of the Month. This
          recognition underscores the effort and passion I put into my role at
          WSAP. I am proud to have contributed positively to the team's
          objectives and demonstrated consistent excellence throughout my
          internship
        </p>
      </Container>
    </div>
  );
};

export default Awards;
