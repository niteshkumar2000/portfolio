import React, { useState } from "react";
import './App.css';
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
  Media,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
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
  return (
    <React.Fragment>
      <Nav>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  );
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
          <NavLink
            href="https://t.me/Niteshkumar15"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <NavLink
            href="https://github.com/niteshkumar2000"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <NavLink
            href="https://www.linkedin.com/in/niteshkumar-s-b4379a148/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <NavLink
            href="https://wa.me/918825812533"
            target="_blank"
            rel="noopener noreferrer"
          >
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

const ProjectHackIn = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        Hack[in]
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Hack[in]</ModalHeader>
        <ModalBody>
          An online game for users across the world designed for an inter
          college event. It is implemented using the MERN stack and runs on AWS.
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/DAMCS/hack-in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" onClick={toggle}>
              View
            </Button>
          </NavLink>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ProjectMup = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        HnK Cabs
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>HnK Cabs</ModalHeader>
        <ModalBody>
          A database project developed using Bootstrap,Javascript,PHP as
          frontend and Oracle 11g as backend. It is an online taxi booking
          service which maps the rider’s request to the available driver and in
          turn connects the driver to rider. At the end of each trip, drivers
          and riders can rate each other and also give feedback.
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/DAMCS/hack-in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" onClick={toggle}>
              View
            </Button>
          </NavLink>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ProjectScrapeIt = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        ScrapeIt
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ScrapeIt</ModalHeader>
        <ModalBody>
          A python scrapy application. The spider searches for the products of
          that particular brand in popular e-commerce websites and renders the
          details of the products.
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/niteshkumar2000/ScrapeIt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" onClick={toggle}>
              View
            </Button>
          </NavLink>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ProjectPyOTP = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        PyOTP
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>PyOTP</ModalHeader>
        <ModalBody>
          A python application which generates and sends OTP and verifies user
          either through email or mobile. This is achieved using the SMTP and
          MIME protocol for email and twilio API for mobile
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/niteshkumar2000/PyOTP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" onClick={toggle}>
              View
            </Button>
          </NavLink>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const ProjectAppCenter = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        AppCenter
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>AppCenter</ModalHeader>
        <ModalBody>
          A WPF application written in C#, its is a combination of several
          applications which includes basic functionalities and additional
          features such as playing audio and video, web search, text formatting
          by taking voice input
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/niteshkumar2000/PyOTP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="primary" onClick={toggle}>
              View
            </Button>
          </NavLink>{" "}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const AcademicProjects = () => {
  return (
    <React.Fragment>
      <Nav pills className="d-flex">
        <NavItem className="p-2">
          <ProjectPyOTP />
        </NavItem>
        <NavItem className="p-2">
          <ProjectAppCenter />
        </NavItem>
        <NavItem className="p-2">
          <ProjectMup />
        </NavItem>
      </Nav>
    </React.Fragment>
  );
};

const NonAcademicProjects = () => {
  return (
    <React.Fragment>
      <Nav pills className="d-flex">
        <NavItem className="p-2">
          <ProjectHackIn />
        </NavItem>
        <NavItem className="p-2">
          <ProjectScrapeIt />
        </NavItem>
      </Nav>
    </React.Fragment>
  );
}

const Contribution = () => {
  return (
    <React.Fragment>
      <Nav pills className="d-flex">
        <NavItem className="p-2">
          <NavLink
            href="https://stats.crDroid.net/twolip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button outline color="primary">
              crDroid
            </Button>
          </NavLink>
        </NavItem>
        <NavItem className="p-2">
          <NavLink
            href="https://github.com/PixelExperience-FanEdition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button outline color="primary">
              Pixel Experience
            </Button>
          </NavLink>
        </NavItem>
        <NavItem className="p-2">
          <NavLink
            href="https://github.com/ancient-devices"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button outline color="primary">
              Ancient Family
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  );
};

const WorkExperience = () => {
  return (
    <React.Fragment>
      <h3>Work Experience</h3>
      <p style={{fontSize:"20px"}}>
        <b><span className="text-primary">Summer Intern</span> at MyGame Solution:</b><br />
        During my period of internship, I was introduced to Outsystem low
        code platform and developed an Android application, which helps in task
        management.
      </p>
    </React.Fragment>
  );
}
function App() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-end p-2"
        style={{
          top: 0,
          zIndex: 100,
          position: "fixed",
          backgroundColor: "black",
          width: "90%"
        }}
      >
        <NavBar />
      </Row>
      <Row className="d-flex justify-content-center pt-5 pb-5" id="home">
        <Home />
      </Row>
      <Row className="d-flex justify-content-center pt-5" id="about">
        <h1>About Me</h1>
      </Row>
      <Row className="d-flex justify-content-start">
        <About />
      </Row>
      <Row className="d-flex justify-content-center pt-5" id="projects">
        <h1>Projects</h1>
      </Row>
      <Row className="d-flex justify-content-start" id="projects">
        <h3>Academic Projects</h3>
      </Row>
      <Row className="d-flex justify-content-start">
        <AcademicProjects />
      </Row>
      <Row className="d-flex justify-content-start" id="projects">
        <h3>Non-Academic Projects</h3>
      </Row>
      <Row className="d-flex justify-content-start">
        <NonAcademicProjects />
      </Row>
      <Row className="d-flex justify-content-start" id="projects">
        <h3>Open Source Contribution</h3>
      </Row>
      <Row className="d-flex justify-content-start">
        <Contribution />
      </Row>
      <Row className="d-flex justify-content-start">
        <WorkExperience />
      </Row>
      <Row className="d-flex justify-content-center pt-5" id="contact">
        <h1>Contact Me</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <Contact />
      </Row>
      <Row className="d-flex justify-content-end pt-5">
        <p>
          &copy; 2020{" "}
          <span className="text-primary">
            <b>NITESHKUMAR</b>
          </span>{" "}
          All Rights Reserved
        </p>
      </Row>
    </Container>
  );
}

export default App;
