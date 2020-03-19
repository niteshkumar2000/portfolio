import React from 'react';
import './App.css';
import {Nav, NavItem, NavLink, Row, Container, Media, ListGroup, ListGroupItem, Button } from "reactstrap";


const Home = () => {
  return (
    <React.Fragment>
          <p style={{fontSize:"50px"}}>
            Hi, I am <span className="text-primary">Niteshkumar</span>
          </p>

          <p style={{ fontSize: "35px" }}>
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
          <NavLink href="#">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </React.Fragment>
  )
}

const About = () => {
  return(
    <React.Fragment>
      <Media className="d-flex align-items-center">
        <Media left>
          <img src="./assets/me.jpg" alt="profile" width="300px" height="300px"/>
        </Media>
        <Media body className="p-2">
          <Media heading className="p-2">
            About Me
          </Media>
          <ListGroup>
            <ListGroupItem>
              Name: <span className="text-primary p-2">Niteshkumar S</span>
            </ListGroupItem>
            <ListGroupItem>
              Age: <span className="text-primary p-3">20</span>
            </ListGroupItem>
            <ListGroupItem>
              Course: <span className="text-primary p-1">&nbsp;MSc Software Systems</span>
            </ListGroupItem>
            <ListGroupItem>
              Country: <span className="text-primary p-1">India</span>
            </ListGroupItem>
            <ListGroupItem>  
                <NavLink
                    href="https://www.github.com/niteshkumar2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-right"
                    >
                    <Button outline color="primary">
                        GitHub
                    </Button>
                </NavLink>        
                <NavLink
                        href="./assets/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="float-right"
                    >
                    <Button outline color="primary">
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

function App() {
  return (
    <Container>
      <Row className="d-flex justify-content-end">
        <NavBar />
      </Row>
      <Row className="d-flex justify-content-center">
        <Home />
      </Row>
      <Row className="d-flex justify-content-start">
        <About />
      </Row>
    </Container>
  );
}

export default App;
