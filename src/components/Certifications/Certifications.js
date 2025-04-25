import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";
import courseraGPT from "./courseragpt.pdf"; // ✅ Imported local pdf

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Certifications I've earned during my journey in tech.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink="https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_saishashanknarang%40gmail.com_CS2024-10412"
              isBlog={false}
              title="Cloud Computing (Cipher Schools)"
              description="Completed a detailed certification on cloud computing fundamentals, architectures, and practical deployment models through Cipher Schools."
              ghLink="https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/TC_saishashanknarang%40gmail.com_CS2024-10412"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020230304432305.pdf"
              isBlog={false}
              title="Cloud Computing (NPTEL)"
              description="Certification from NPTEL (IIT & IISc) covering cloud infrastructures, virtualization, and cloud service models."
              ghLink="https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020230304432305.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={courseraGPT}
              isBlog={false}
              title="ChatGPT Advanced Data Analysis (Coursera)"
              description="Certification on using OpenAI's ChatGPT for advanced data analysis, including exploration, visualization, and interpretation of large datasets."
              ghLink="https://www.coursera.org/account/accomplishments/certificate/3YTBUTH4S7UB"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
