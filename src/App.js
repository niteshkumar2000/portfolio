import React from 'react';
import './App.css';
import { Nav, NavItem, NavLink, Row, Container, Media, ListGroup, ListGroupItem } from "reactstrap";


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
            Conatct
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
          <Media object data-src="" alt="Profile Photo" />
        </Media>
        <Media body className="p-2">
          <Media heading>
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
      <Row className="d-flex justify-content-start p-5">
        <About />
      </Row>
    </Container>
  );
}

export default App;
