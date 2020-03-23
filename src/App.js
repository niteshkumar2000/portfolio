import React from 'react';
import './App.css';
import {Nav, NavItem, NavLink, Row, Container, Media, ListGroup, ListGroupItem, Button, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <React.Fragment>
          <p style={{fontSize:"50px"}}>
            Hi, I am <span className="text-primary">Niteshkumar</span>
          </p>

          <p style={{ fontSize: "33px" }}>
            I am a software developer. Let's build something amazing together
          </p>
    </React.Fragment>
  );
};

const NavBar = () => {
  return(
    <React.Fragment>
      <Nav className="d-flex p-2 justify-content-end">  
        <NavItem>
          <NavLink href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#skills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  )
}

const About = () => {
  return (
    <React.Fragment>
      <Media className="d-flex align-items-center">
        <Media left>
          <img
            src="./assets/me.jpg"
            alt="profile"
            width="300px"
            height="300px"
          />
        </Media>
        <Media body className="p-2">
          <ListGroup style={{ fontSize: "25px" }}>
            <ListGroupItem>
              Name: <span className="text-primary p-2">Niteshkumar S</span>
            </ListGroupItem>
            <ListGroupItem>
              Age: <span className="text-primary p-3">20</span>
            </ListGroupItem>
            <ListGroupItem>
              Course:{" "}
              <span className="text-primary p-1">
                &nbsp;MSc Software Systems
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Country: <span className="text-primary p-1">India</span>
            </ListGroupItem>
            <ListGroupItem>
              <NavLink
                href="./assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="float-left p-0"
              >
                <Button outline color="primary" style={{width:"100%", height:"50px"}}>
                  Resume
                </Button>
              </NavLink>
            </ListGroupItem>
          </ListGroup>
        </Media>
      </Media>
    </React.Fragment>
  );
}

const Contact = () => {
  return (
    <React.Fragment>
      <Nav pills className="d-flex">
        <NavItem className="d-flex p-4">
          <NavLink href="mailto:nitesh156200@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              size="4x"
              style={{ color: "#ffb800" }}
              className="d-flex align-items-start"
            />
            <p style={{ color: "white" }} className="p-1">
              Mail
            </p>
          </NavLink>
        </NavItem>
        <NavItem className="d-flex p-4">
          <NavLink href="https://t.me/Niteshkumar15">
            <FontAwesomeIcon
              icon={faPaperPlane}
              size="4x"
              style={{ color: "#ffb800" }}
              className="d-flex align-items-start"
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Telegram</p>
          </NavLink>
        </NavItem>
        <NavItem className="d-flex p-4">
          <NavLink href="https://github.com/niteshkumar2000">
            <FontAwesomeIcon
              icon={faGithub}
              size="4x"
              style={{ color: "#ffb800" }}
              className="d-flex align-items-start"
            />
            <p style={{ color: "white", paddingTop: "10px" }}>
              &nbsp;&nbsp;Github
            </p>
          </NavLink>
        </NavItem>
        <NavItem className="d-flex p-4">
          <NavLink href="https://www.linkedin.com/in/niteshkumar-s-b4379a148/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="4x"
              style={{ color: "#ffb800" }}
              className="d-flex align-items-start"
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Linkedin</p>
          </NavLink>
        </NavItem>
        <NavItem className="d-flex p-4">
          <NavLink href="https://wa.me/918825812533">
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="4x"
              style={{ color: "#ffb800" }}
              className="d-flex align-items-start"
            />
            <p style={{ color: "white", paddingTop: "10px" }}>Whatsapp</p>
          </NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  );
}

const Skills = () => {
  return (
    <React.Fragment>
      <div className="text-start">25%</div>
      <Progress value={25}  style={{color:"yellow"}}/>
    </React.Fragment>
  );
}
function App() {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <NavBar />
      </Row>
      <Row className="d-flex justify-content-center p-5">
        <Home />
      </Row>
      <Row className="d-flex justify-content-center p-5" id="about">
        <h1>About Me</h1>
      </Row>
      <Row className="d-flex justify-content-start">
        <About />
      </Row>
      <Row className="d-flex justify-content-center p-5" id="skills">
        <h1>Skills</h1>
      </Row>
      <Row className="d-flex justify-content-start">
        <Skills />
      </Row>
      <Row className="d-flex justify-content-center p-5" id="contact">
        <h1>Contact Me</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
