import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* Show PDF if pdfLink exists, otherwise show image */}
      {props.pdfLink ? (
        <embed
          src={props.pdfLink}
          width="100%"
          height="400px"
          type="application/pdf"
          style={{ borderRadius: "10px" }}
        />
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="project-img" />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        {/* GitHub/Certificate Link */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px" }}>
            <VscGithub /> &nbsp;
            {props.isBlog ? "Blog" : "View"}
          </Button>
        )}

        {/* Demo Link if it exists */}
        {props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
