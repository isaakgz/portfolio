import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
  <Container>
    <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          I'm a<span className="purple"> MERN</span> stack developer with a passion for creating dynamic and
          user-friendly web applications. With expertise in <span className="purple">
            MongoDB, Express.js,
            React.js, and Node.js
          </span>, I specialize in building robust and scalable
          solutions for a variety of industries.<br />  <br />I also have experience with
          <span className="purple">MySQL</span> for relational database management,<span className="purple"> Redux</span> for state management
          in complex applications, and <span className="purple">TypeScript</span> for writing scalable and
          maintainable code.
          
         
          
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>Feel free to connect with me</p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://https://github.com/isaakgz"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="mailto:yesakgz12@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillMail/>
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/yesak-gezahagne-29106b258/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          
        </ul>
      </Col>
    </Row>
  </Container>
</Container>

  );
}
export default Home2;
