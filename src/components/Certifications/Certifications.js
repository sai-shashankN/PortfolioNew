import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards"; // reuse same card component
import certImg from "../../Assets/Projects/leaf.png"; // placeholder

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few certifications I’ve earned during my learning journey.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              isBlog={false}
              title="Google Cloud Essentials"
              description="Completed the Qwiklabs quest on Google Cloud basics including IAM, compute, and storage modules."
              ghLink="https://www.qwiklabs.com/public_profiles/YOUR_CERT_LINK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              isBlog={false}
              title="Introduction to TensorFlow"
              description="Coursera certification focused on foundational deep learning with TensorFlow by DeepLearning.AI."
              ghLink="https://www.coursera.org/account/accomplishments/YOUR_CERT_LINK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certImg}
              isBlog={false}
              title="Unity Certified Programmer (Practice)"
              description="Hands-on Unity experience verified through a certificate of completion. Includes physics, UI, and gameplay scripting."
              ghLink="" // leave empty if no public link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;

