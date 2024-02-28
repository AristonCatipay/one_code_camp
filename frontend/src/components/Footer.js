import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <div class="container-lg">
                <div class="row justify-content-center">
                    <div class="col">
                        <h1 class="text-center fw-light fs-6">About</h1>
                    </div>
                    <div class="col">
                        <h1 class="text-center fw-light fs-6">GitHub</h1>
                    </div>
                    <div class="col">
                        <h1 class="text-center fw-light fs-6">LinkedIn</h1>
                    </div>
                    <div class="col">
                        <h1 class="text-center fw-light fs-6">Discord</h1>
                    </div>
                    <div class="col">
                        <h1 class="text-center fw-light fs-6">Dribble</h1>
                    </div>
                </div>
                <h1 class="text-center fw-light fs-6">@ 2024 DripKick™. All Rights Reserved.</h1>
            </div>
        </Container>
      </Navbar>
  )
}

export default Footer
