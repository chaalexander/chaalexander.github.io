import React from "react";
import profilePic from "../assets/images/profile.png";

function AboutContent() {
  return (
    <>
      <div className="container" id="about">
        <div className="media w3-black">
          <img src={profilePic} className="img" alt="Profile" />
          <div className="media-body">
            <p className="aboutmeBig">
              Hi!! I’m Cha Alexander, born and raised in Brazil. I have loved
              technology my whole life. My brother and I once took a TV apart to
              see what was inside, and we were able to put it back together. The
              TV turned on, there was no color or sound, but that was when I
              decided I wanted to be a developer (Fun Fact: I was only 8). I
              started modeling at 5 years old and began my international career
              at the age of 18. I lived in Asia for 9 years and 1 year in
              Europe. During my season in Holland, I visited the Philips
              Research Center in Eindhoven and fell in love with coding. After I
              retired from modeling I moved to the US. At the beginning of 2020
              I signed up for the Full Stack Web Developer BootCamp at
              Vanderbilt University, graduating with an A in the course.
              Currently I am Interning with The Unicorn Finders company and
              creating some websites.
            </p>
            <p className="aboutmeSml">
              Hi!! I’m Cha Alexander, born and raised in Brazil. Visiting the
              Philips Research Center in Eindhoven I fell in love with coding.
              At the beginning of 2020 I signed up for the Full Stack Web
              Developer BootCamp at Vanderbilt University, graduating with an A
              in the course. Currently I am Interning with The Unicorn Finders
              company and creating some websites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
