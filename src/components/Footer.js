import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
 
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
;
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Yesak G.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{""}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://https://github.com/isaakgz"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
               href="mailto:yesakgz12@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                 <AiFillMail/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/yesak-gezahagne-29106b258/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;