import React from "react";
import "./App.css";
import { Row, Container } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import About from "./components/About";
import NavBar from "./components/Navbar";
import WorkExperience from "./components/Work";
import ProjectCard from "./components/ProjectCard";
import RecommendationCard from "./components/RecommendationCard";

function App() {
  const academicProjects = [
    {
      name: "StockTimes",
      description:
        "MERN stack application for keeping up to date with stock news and charts.",
      language: ["react", "mongo", "node", "express"],
    },
    {
      name: "Stock Predictor",
      description:
        "Combined usage of several statistical and machine learning models for predicting the stock prices.",
      language: ["python", "sci-kit"],
    },
    {
      name: "ENSE",
      description:
        "Enhanced Stock News Search Engine which gives personalised stock news when queried by the user.",
      language: ["python", "flask", "scrapy", "elastic"],
    },
  ];
  const nonAcademicProjects = [
    {
      name: "HackIn",
      description:
        "An online game for user across the globe created for a college event.",
      language: ["react", "mongo", "node", "express"],
      code: "https://github.com/DAMCS/hack-in",
    },
    {
      name: "VMS",
      description: "Internship management portal created for the department",
      language: ["react", "mongo", "node", "express"],
      code: "https://github.com/DAMCS",
    },
    {
      name: "Freaky OS",
      description: "Creator and maintainer of custom andriod operating system.",
      language: ["android", "open-source", "git"],
      code: "https://github.com/FreakyOS",
    },
  ];
  return (
    <Container>
      <Row className="d-flex justify-content-start">
        <NavBar />
      </Row>
      <Row id="home"></Row>
      <div className="flex justify-center items-center h-screen">
        <About />
      </div>
      <Row className="d-flex justify-content-center pt-5" id="projects">
        <h1>Academic Projects</h1>
      </Row>
      <div className="flex flex-col justify-center items-center pt-2">
        <Carousel className="w-full md:w-1/2">
          {academicProjects.map((project) => {
            return (
              <ProjectCard
                language={project.language}
                content={project.description}
                name={project.name}
                link={project.code}
              />
            );
          })}
        </Carousel>
      </div>
      <Row className="d-flex justify-content-center pt-2">
        <h1>Non-Academic Projects</h1>
      </Row>
      <div className="flex flex-col justify-center items-center pt-2">
        <Carousel className="w-full md:w-1/2">
          {nonAcademicProjects.map((project) => {
            return (
              <ProjectCard
                language={project.language}
                content={project.description}
                name={project.name}
                link={project.code}
              />
            );
          })}
        </Carousel>
      </div>
      <Row className="d-flex justify-content-center pt-5" id="recommendations">
        <h1>Recommendations</h1>
      </Row>
      <div className="pt-5">
        <Carousel className="bg-gray-900 w-full">
          <RecommendationCard content="I have collaborated with Nitesh in numerous projects and have known Nitesh for the last 5 years. He has always shown great dedication in understanding a problem statement and tackling it down step by step. He is a hardworking and an extremely talented individual. He has profound knowledge in Software Development and most importantly is willing to share this knowledge with the team. I would recommend Nitesh to any company that would take in a dedicated, highly enthusiastic person in their team. - Nitesh's Co-wroker" />
          <RecommendationCard content="Nitesh is exceptional intern. His technical expertise and problem solving skills are outstanding. He thinks out of box to solve critical problems. His interaction with team and understanding the problem at hand is amazing. He is a quick learner and tech enthusiast. It was great working with him and mentoring him. - Nitesh's Mentor" />
        </Carousel>
      </div>
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
