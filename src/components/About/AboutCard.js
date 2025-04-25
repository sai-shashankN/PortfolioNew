import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Sai Shashank Narang</span> from <span className="purple">Hyderabad, India</span>.
            <br />
            I’m currently a 3rd-year B.Tech Computer Science student at Lovely Professional University.
            <br />
            My interests include machine learning, game development, and building scalable systems in the cloud.
            <br />
            <br />
            Outside of coding, here’s what keeps me going:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on walks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build what matters. Learn what excites you. Repeat."{" "}
          </p>
          <footer className="blockquote-footer">Shashank</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
