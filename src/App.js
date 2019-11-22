import React from 'react';
import './App.css';
import { Jumbotron, Button } from "reactstrap";

const Example = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, there!</h1>
        <p className="lead">This is my personal website (under construction).</p>
        <hr className="my-2" />
        <p>To see my work, please click the button</p>
        <p className="lead">
          <Button outline color="primary">
            <a
              style={{ textDecoration: "none" }}
              href="https://www.github.com/niteshkumar2000"
              target="_blank"
            >
              Click here
            </a>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button outline color="primary">
            <a
              style={{ textDecoration: "none" }}
              href="/Resume.pdf"
              download
            >
              Resume
            </a>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

function App() {
  return (
    <div>
      <Example />
    </div>
  );
}

export default App;
