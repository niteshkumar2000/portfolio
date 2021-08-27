import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import pfp from "../assets/me.jpg";

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-gray-900 rounded-lg p-10">
          <img className="h-40 w-40 rounded-full mx-auto" src={pfp} alt="PFP" />
          <div className="text-center">
            <div className="text-2xl pt-2">Niteshkumar Sukumaran</div>
            <div className="text-white-500 text-xl pt-1">Software Engineer</div>
            <div className="grid grid-cols-3 divide-x divide-gray-400 p-2">
              <div className="text-center">
                <a
                  href="mailto:nitesh156200@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" />
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/niteshkumar-s-b4379a148/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://github.com/niteshkumar2000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
