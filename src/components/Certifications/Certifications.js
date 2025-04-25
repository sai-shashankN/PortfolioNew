import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "../Projects/ProjectCards";

// Existing certs
import courseraGPT from "./courseragpt.pdf";

// New cert PDFs
import coursera1 from "./Coursera 89WRUJA7SKEN.pdf"; // Approximation Algorithms
import coursera2 from "./Coursera CZPS4NZ3ZECH.pdf"; // Dynamic Programming
import coursera3 from "./Coursera HUMN6FZP3PWC.pdf"; // Algorithms on Strings
import coursera4 from "./Coursera MSZYFCJH75QM.pdf"; // Analysis of Algorithms
import coursera5 from "./Coursera MXTREWAQPQ7E.pdf"; // ChatGPT Playground
import coursera6 from "./Coursera QT58AFQCUPWY.pdf"; // Build AI Apps
import coursera7 from "./Coursera V9HKLJJF9Y7H.pdf"; // Generative AI
import coursera8 from "./Coursera WW34S72AGHGW.pdf"; // ChatGPT for Excel

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

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera1}
              title="Approximation Algorithms and LP"
              description="University of Colorado Boulder · Completed May 2024. Focused on combinatorics, approximation bounds, and LP-based solutions."
              ghLink={coursera1}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera2}
              title="Dynamic Programming, Greedy Algorithms"
              description="University of Colorado Boulder · Completed May 2024. Deep dive into DP strategies, memoization, greedy techniques."
              ghLink={coursera2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera3}
              title="Algorithms on Strings"
              description="UC San Diego · Completed May 2024. Covers suffix trees, pattern matching, and genome data parsing."
              ghLink={coursera3}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera4}
              title="Analysis of Algorithms"
              description="Princeton University · Completed May 2024. Topics include big-O analysis, recursive relations, and data structure performance."
              ghLink={coursera4}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera5}
              title="ChatGPT Playground for Beginners"
              description="Coursera Project Network · Completed May 2024. Intro to prompt-based NLP using ChatGPT’s UI tools."
              ghLink={coursera5}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera6}
              title="Build AI Apps with ChatGPT & GPT-4"
              description="Scrimba · Completed May 2024. Combined React, GPT-4, and image generation via DALL·E."
              ghLink={coursera6}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera7}
              title="Generative AI with Large Language Models"
              description="DeepLearning.AI · Completed April 2024. Core concepts in prompting, fine-tuning, tokenization, and transformer flows."
              ghLink={coursera7}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfLink={coursera8}
              title="ChatGPT + Excel Automation"
              description="Coursera Project Network · Completed March 2024. Time-saving tasks in Excel using ChatGPT prompts and automation logic."
              ghLink={coursera8}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
