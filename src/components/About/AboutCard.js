import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yesak Gezahagne</span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I am currently studying computer science  at University of people.
            <br />
            I have completed  Bsc in Engineering and Full stack development Boot camp .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Talent is like a seed that needs nurturing and hard work to flourish into something remarkable!"{" "}
          </p>
          <footer className="blockquote-footer">yesak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
