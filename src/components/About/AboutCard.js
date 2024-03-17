import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Virendra Yadav </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software Automation Developers at EPAM.
            <br />
            I have completed Part Time MCA in Computer Science and Computing at
            Shubharti University Meerut.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Sketch
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#38836a" }}>
            "Experience and Explore Make's You Perfect!"{" "}
          </p>
          <footer className="blockquote-footer">Vire...</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
