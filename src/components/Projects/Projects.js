import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png"; // Use placeholder image
import chatify from "../../Assets/Projects/chatify.png"; // Another placeholder
import emotion from "../../Assets/Projects/emotion.png"; // Use for ML projects

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some highlights of what I’ve built and trained recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI Attendance System"
              description="A machine learning-based attendance system that captures faces using dlib, OpenCV, and face_recognition. Achieved 99.38% accuracy using a local facial embeddings database."
              ghLink="" // Add GitHub link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Obstacle Dodge Game"
              description="A Unity-based simulation that simulates real-time movement around dynamic obstacles. Optimized mesh performance to reduce processing time in 3D environments."
              ghLink="" // Add GitHub link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tag Game (ML Simulation)"
              description="A 3D Unity + ML game where a trained agent plays a tagging game using deep reinforcement learning. Swappable roles between tagger and runner. Objects modeled in Blender."
              ghLink="" // Add GitHub link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Reinforcement Learning Game AI"
              description="A game agent trained to dodge dynamic obstacles and reach goal states using reinforcement learning. Explores application in self-maneuvering systems like self-driving cars."
              ghLink="" // Add GitHub link if available
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Cancer Cell Detection System"
              description="A cell classification model trained to detect cancerous vs non-cancerous cells. Achieved 97.87% accuracy — higher than published research (92%). Built using Kaggle datasets."
              ghLink="" // Add GitHub link if available
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

