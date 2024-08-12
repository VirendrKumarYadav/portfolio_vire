import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I'm <span className="purple">Virendra Yadav</span>, hailing from the vibrant city of <span className="purple">Mumbai, India</span>.
            <br />
            I’m currently working as a Software Development Engineer at EPAM.
            <br />
            I hold a Part-Time MCA in Computer Science and Computing from Shubharti University, Meerut.
            <br />
            <br />
            When I’m not coding, I enjoy indulging in a variety of other passions!
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
