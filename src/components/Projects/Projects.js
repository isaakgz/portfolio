import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gebeya from "../../../src/Assets/Projects/gebeya.png";
import gamehub from "../../../src/Assets/Projects/gamehub.png";
import amazon from "../../../src/Assets/Projects/amzon.png";
import netflix from "../../../src/Assets/Projects/netflix.png";
import forum from "../../../src/Assets/Projects/evangadi.png";





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
              imgPath={gebeya}
              isBlog={false}
              title="Gebeya Tech mart"
              description="Gebeya Tech Mart is an e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js), TypeScript, and Redux Toolkit. It features admin functionality and authentication.."
              ghLink="https://github.com/isaakgz/Gebeya_TechMart-E-commerce_Website"
              demoLink="https://gebeya-techmart.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamehub}
              isBlog={false}
              title="Game-hub"
              description="Game Hub is a sleek and intuitive web application that serves as a centralized platform for gamers to discover new games, explore details about their favorite titles, and stay up-to-date with the latest releases. Built with React and Chakra UI, Game Hub offers a visually appealing and responsive user interface."
              ghLink="https://github.com/isaakgz/Game-hub"
              demoLink="https://game-hub-isaak.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon clone"
              description="The Amazon Clone is a full-stack web application that replicates the core features of Amazon, including product listings, user authentication, shopping cart functionality, and checkout with Stripe payment integration."
              ghLink="https://github.com/isaakgz/amazon-clone-"
              demoLink="https://amazon-clone-isaak.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix clone"
              description="The Netflix Front-end Clone is a React-based web application that replicates the user interface of the popular streaming platform, Netflix. It provides a familiar and immersive experience for users, allowing them to browse through a catalog of movies and TV shows, view details about each title, and watch trailers.."
              ghLink="https://github.com/isaakgz/netflix-frontend-clone"
              demoLink="https://netflix-clone-isaak.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Evangadi forum"
              description="Evangadi Forum is a dynamic and interactive web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users to engage in discussions, share ideas, and collaborate on topics related to Evangadi culture, art, and community."
              ghLink="https://github.com/isaakgz/evangadi-forum-isaak"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
