import React from "react";
import profilePic from "../assets/images/profile.png";

function AboutContent() {
  return (
    <>
      <div className="container" id="about">
        <div className="media w3-black">
          <img src={profilePic} className="img" alt="Profile" />
          <div className="media-body">
            <p id="aboutme">
              Brazilian full Stack Web Developer with a background in sales,
              fashion and customer service providing strong problem-solving
              skills with a keen eye for aesthetics and presentation. An
              excellent communicator and collaborator who works well in
              team-based projects and independently with very strong
              interpersonal skills. Effectively leverage interest in solving
              complex problems by contributing as a part of a fast paced,
              quality-driven team.
            </p>
            {/* will just show on a small screen */}
            <p className="smallScreen">
              <i className="fab fa-html5 fa-2x"></i>{" "}
              <i className="fab fa-js-square fa-2x"></i>{" "}
              <i className="fab fa-css3-alt fa-2x"></i>{" "}
              <i className="fab fa-react fa-2x"></i>{" "}
              <i className="fab fa-npm fa-2x"></i>{" "}
              <i className="fab fa-node fa-2x"></i>{" "}
              <i class="fab fa-react fa-2x"></i>
            </p>
            {/* will just show on a big screen */}
            <div className="languages">
              <ul className="list-unstyled displayUnder">
                <i className="fab fa-html5 fa-3x lng"></i>
                <span>HTML</span>
                <i className="fab fa-js-square fa-3x lng"></i>
                <span className="displayUnder">JavaScript</span>{" "}
                <i className="fab fa-css3-alt fa-3x lng"></i>{" "}
                <span className="displayUnder">CSS</span>{" "}
                <i className="fab fa-react fa-3x lng"></i>{" "}
                <span className="displayUnder">React</span>{" "}
                <i className="fab fa-npm fa-3x lng"></i>{" "}
                <span className="displayUnder">NPM</span>{" "}
                <i className="fab fa-node fa-3x lng"></i>{" "}
                <span className="displayUnder">Node</span>{" "}
                <i class="fab fa-react fa-3x lng"></i>
                <span className="displayUnder">React</span>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
