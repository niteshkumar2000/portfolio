import React, { useState } from "react";
import './App.css';
import {
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  Navbar,
  NavbarToggler, Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Home = () => {
  return (
    <React.Fragment>
          <h1>
            Hi, I am <span className="text-primary">Niteshkumar</span>
          </h1>

          <p style={{fontSize: "3vw"}}>
            I am a software developer. Let's build something amazing together
          </p>
    </React.Fragment>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar fixed="top" dark color="dark" expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={toggle}>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#work">Work</NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
}

const About = () => {
  return (
    <React.Fragment>
        <Row>
          <Col>
            <img
              src="./assets/me.jpg"
              alt="profile"
              width="200px"
              height="200px"
            />
          </Col>
          <Col>
          <ListGroup>
            <ListGroupItem>
              Name: <span className="text-primary">Niteshkumar S</span>
            </ListGroupItem>
            <ListGroupItem>
              Age: <span className="text-primary">20</span>
            </ListGroupItem>
            <ListGroupItem>
              Course:{" "}
              <span className="text-primary">
                &nbsp;MSc Software Systems
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Country: <span className="text-primary">India</span>
            </ListGroupItem>
            <ListGroupItem>
              <NavLink
                href="./assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="float-left p-0"
              >
                <Button outline color="primary">
                  Resume
                </Button>
              </NavLink>
            </ListGroupItem>
          </ListGroup>
          </Col>
        </Row>
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
        {/* <NavItem className="d-flex p-4">
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
        </NavItem> */}
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


const GitUserBot = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button outline color="primary" onClick={toggle}>
        GithubUserBot
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>GithubUserBot</ModalHeader>
        <ModalBody>
          A telegram bot which gives Github user information which can be deployed on server :)
        </ModalBody>
        <ModalFooter>
          <NavLink
            href="https://github.com/niteshkumar2000/GithubUser"
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
}

const AcademicProjects = () => {
  return (
    <React.Fragment>
      <ListGroup horizontal>
        <ListGroupItem>
          <ProjectPyOTP />
        </ListGroupItem>
        <ListGroupItem>
          <ProjectAppCenter />
        </ListGroupItem>
        <ListGroupItem>
          <ProjectMup />
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
};

const NonAcademicProjects = () => {
  return (
    <React.Fragment>
      <ListGroup horizontal>
        <ListGroupItem>
          <ProjectHackIn />
        </ListGroupItem>
        <ListGroupItem>
          <ProjectScrapeIt />
        </ListGroupItem>
        <ListGroupItem>
          <GitUserBot />
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
}

const Contribution = () => {
  return (
    <React.Fragment>
      <ListGroup horizontal>
        <ListGroupItem tag='a' href="https://github.com/FreakyOS"
          target="_blank"
          rel="noopener noreferrer">
            <Button outline color="primary">
              Freaky OS
            </Button>
        </ListGroupItem>
        <ListGroupItem tag='a' href="https://github.com/PixelExtended"
          target="_blank"
          rel="noopener noreferrer">
            <Button outline color="primary">
              Pixel Extended
            </Button>
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
};

const WorkExperience = () => {
  return (
    <React.Fragment>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 May - Present"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          iconStyle={{ background: "#ffb800" }}
        >
          <h3 className="vertical-timeline-element-title">Student Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">KLA, Chennai</h4>
          <p style={{color:"#ffb800"}}>
            (i) Advanced Diagonostics & performance models using Machine Learning Algorithms. <br></br>
            (ii) Building Microservices and deploying on Kubernetes.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "#ffb800" }}
          contentArrowStyle={{ borderRight: "7px solid  #ffb800" }}
          date="2018 April - May"
          iconStyle={{ background: "black" }}
        >
          <h3 className="vertical-timeline-element-title">Summer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">
            My Game Solutions, Coimbatore
          </h4>
          <p style={{color: "#fff"}}>
            I was introduced to Outsystem low
            code platform and developed an Android application, which helps in
            task management.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 June - Present"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          iconStyle={{ background: "#ffb800" }}
        >
          <h3 className="vertical-timeline-element-title">College</h3>
          <h4 className="vertical-timeline-element-subtitle">PSG Tech, Coimbatore</h4>
          <p style={{color:"#ffb800"}}>
            MSc.Sofware Systems (5 year intergrated course)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
}

function App() {
    return (
      <Container>
        <Row
          className="d-flex justify-content-start"
        >
          <NavBar />
        </Row>
        <Row className="d-flex justify-content-center pt-5 pb-5 mt-5" id="home">
          <Home />
        </Row>
        <Row className="d-flex justify-content-center pt-5 mt-5" id="about">
          <h1>About Me</h1>
        </Row>
        <Row className="d-flex justify-content-center">
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
        <Row className="d-flex justify-content-center pt-5" id="work">
          <h1>Timeline</h1>
        </Row>
        <Row className="d-flex justify-content-start pt-5">
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
            &copy; {new Date().getFullYear().toString() + " "}
            <span className="text-primary">
              <b>Niteshkumar</b>
            </span>{" "}
            All Rights Reserved
          </p>
        </Row>
      </Container>
    );
}

export default App;
