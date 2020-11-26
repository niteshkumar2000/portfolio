import React, { useState } from "react";
import './App.css';
import {
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
} from "reactstrap";

import About from './components/About';
import NavBar from './components/Navbar';
import WorkExperience from './components/Work';

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
            href="https://github.com/Harishkumar01/Cab-Management"
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
            href="https://github.com/niteshkumar2000/WPF-AppCenter"
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
        Github UserBot
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Github UserBot</ModalHeader>
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

function App() {
    return (
      <Container>
        <Row className="d-flex justify-content-start">
          <NavBar />
        </Row>
        <Row id="home"></Row>
        <Row className="d-flex justify-content-center mt-5">
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
