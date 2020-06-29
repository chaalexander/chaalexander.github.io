import React, { useState } from "react";
import profilePic from "../assets/images/profile.png";

function AboutContent() {
  const [showHTMLLabel, setShowHTMLLabel] = useState(false);
  const [showJSLabel, setShowJSLabel] = useState(false);
  const [showCSSLabel, setShowCSSLabel] = useState(false);
  const [showReactLabel, setShowReactLabel] = useState(false);
  const [showNPMLabel, setShowNPMLabel] = useState(false);
  const [showNodeLabel, setShowNodeLabel] = useState(false);

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
            </p>
            {/* will just show on a big screen */}
            <div className="languages">
              <ul>
                <i
                  className={"fab fa-html5 fa-3x lng"}
                  onMouseEnter={() => setShowHTMLLabel(true)}
                  onMouseLeave={() => setShowHTMLLabel(false)}
                ></i>
                {showHTMLLabel && <span className="display">HTML</span>}
                <i
                  className="fab fa-js-square fa-3x lng"
                  onMouseEnter={() => setShowJSLabel(true)}
                  onMouseLeave={() => setShowJSLabel(false)}
                ></i>
                {showJSLabel && <span className="display">JavaScript</span>}
                <i
                  className="fab fa-css3-alt fa-3x lng"
                  onMouseEnter={() => setShowCSSLabel(true)}
                  onMouseLeave={() => setShowCSSLabel(false)}
                ></i>
                {showCSSLabel && <span className="display">CSS</span>}
                <i
                  className="fab fa-react fa-3x lng"
                  onMouseEnter={() => setShowReactLabel(true)}
                  onMouseLeave={() => setShowReactLabel(false)}
                ></i>
                {showReactLabel && <span className="display">React</span>}
                <i
                  className="fab fa-npm fa-3x lng"
                  onMouseEnter={() => setShowNPMLabel(true)}
                  onMouseLeave={() => setShowNPMLabel(false)}
                ></i>
                {showNPMLabel && <span className="display">NPM</span>}
                <i
                  className="fab fa-node fa-3x lng"
                  onMouseEnter={() => setShowNodeLabel(true)}
                  onMouseLeave={() => setShowNodeLabel(false)}
                ></i>
                {showNodeLabel && <span className="display">Node</span>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
