import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pathlab from "../../Assets/Projects/pathlab.png";
import crypto from "../../Assets/Projects/crpto.png";
import trello from "../../Assets/Projects/trello.png";
import LanguageTranfer from "../../Assets/Projects/text_trans.png";
import linked from "../../Assets/Projects/linked.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathlab}
              isBlog={false}
              title="Dr. Lal PathLab "
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with HTML and applied some quality CSS."
              ghLink="https://github.com/jaitensahu/Project-Dr.PathLab"
              demoLink="https://jaitensahu.github.io/Project-Dr.PathLab/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello.com"
              description="My personal blog page build with HTML CSS/Tailwind Css and Javascript which takes the content from makdown Board and Cards it using drag and drop properties.also can create no of card in to travell from one card to other"
              ghLink="https://github.com/AaqibBashirMir/MCT04_TEAM02/tree/main/Virendra"
              demoLink="https://aaqibbashirmir.github.io/MCT04_TEAM02/Virendra/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linked}
              isBlog={false}
              title="LinkedIn"
              description="My personal blog page build with React.js and Tailwind Css. Firebase is userd for DB and authentication which takes the username and password and renders it using Raect.js. It have options to create the post and also cna update profile of User,"
              ghLink="https://github.com/VirendrKumarYadav/Linkedin"
              demoLink="https://linkedin-i30fdmyms-virendra-yadavs-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crpto"
              description="Online crypto details and curency info build with HTML and CSS and Javascript. Also make ui for real time details of crypto currency, via using dummy API just showing all data of UI"
              ghLink="https://github.com/VirendrKumarYadav/Cryptogamia"
              demoLink="https://cryptogamia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LanguageTranfer}
              isBlog={false}
              title="Language Transfer"
              description="This project buled up with HTML, CSS and Javascipt, This is the one page UI , which is convert any language to any language wjile select in dropdown lanuage, this project internally used with post requested API, which is dummy one."
              ghLink="https://github.com/VirendrKumarYadav/react-projects/tree/main/text-translater"
              demoLink="https://text0translator.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
