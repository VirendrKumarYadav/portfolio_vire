import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pathlab from "../../Assets/Projects/pathlab.png";
import crypto from "../../Assets/Projects/crpto.png";
import trello from "../../Assets/Projects/trello.png";
import LanguageTranfer from "../../Assets/Projects/text_trans.png";
import linked from "../../Assets/Projects/linked.png";
import Geekster from '../../Assets/Projects/geekster.png'
import Google from '../../Assets/Projects/google.png'
import Ecom from '../../Assets/Projects/Ecom-full-stack.png'
import FoodLink from '../../Assets/Projects/food-link.png'


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

        <h2 className="project-heading">
          NextJS <strong className="purple">Projects </strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodLink}
              isBlog={false}
              title="Food-Link"
              description="Food-Link is my first NextJS project,I was made this with help of Tailwind CSS and MongoesDB, Frontend and Backend!"
              ghLink="https://github.com/VirendrKumarYadav/foodies"
              demoLink="https://foodies-khaki-one.vercel.app/login/"
            />
          </Col>
        </Row>
        <h2 className="project-heading">
          React <strong className="purple">Projects </strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="Ecom"
              description="ECOM is a big React Framework architecture with the help of React+Mongoes DB and also added the Express NodeJS Server. In this I added Payment Integeration with Rozerpay."
              ghLink="https://github.com/VirendrKumarYadav/ecom_ui"
              demoLink="https://ecom-ui-zeta.vercel.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trello}
              isBlog={false}
              title="Trello.com"
              description="My personal blog page build with HTML CSS/Tailwind Css and Javascript which takes the content from makdown Board and Cards it using drag and drop properties.also can create no of card in to travell from one card to other"
              ghLink="https://github.com/VirendrKumarYadav/trellofrontend"
              demoLink="https://trellofrontend.vercel.app/"
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

         
        </Row>

        <h2 className="project-heading">
          Javascript <strong className="purple">Projects </strong>
        </h2>
        <Row>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathlab}
              isBlog={false}
              title="Dr. Lal PathLab "
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with HTML and applied some quality CSS.It's a team based project, and we own the prizes for thos for first rank."
              ghLink="https://github.com/jaitensahu/Project-Dr.PathLab"
              demoLink="https://jaitensahu.github.io/Project-Dr.PathLab/"
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

        <h2 className="project-heading">
          HTML CSS <strong className="purple">Projects </strong>
        </h2>
        <Row>
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
        <h2 className="project-heading">
          FIGMA <strong className="purple">Projects </strong>
        </h2>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Geekster}
              isBlog={false}
              title="Geekster"
              description="This project buled up with HTML, CSS and Javascipt, This is the one page UI , which is convert any language to any language wjile select in dropdown lanuage, this project internally used with post requested API, which is dummy one."
              ghLink="https://www.figma.com/design/vbn33A16GKkKCmhSOyusqN/Geekster?node-id=2-5&t=GDPIYun0MTtmjXS5-0"
              demoLink="https://www.figma.com/design/vbn33A16GKkKCmhSOyusqN/Geekster?node-id=2-5&t=GDPIYun0MTtmjXS5-0"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Google}
              isBlog={false}
              title="Google"
              description="This project buled up with HTML, CSS and Javascipt, This is the one page UI , which is convert any language to any language wjile select in dropdown lanuage, this project internally used with post requested API, which is dummy one."
              ghLink="https://www.figma.com/design/V2jWzX1msCMldAie3CYjtP/Google.com?node-id=0-1&t=JQc9T6q4LRxzAx5d-0"
              demoLink="https://www.figma.com/design/V2jWzX1msCMldAie3CYjtP/Google.com?node-id=0-1&t=JQc9T6q4LRxzAx5d-0"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
