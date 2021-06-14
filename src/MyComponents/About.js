import React from "react";
import picture from "./image1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  let socialStyle = {
    margin: "0 auto",
    textAlign: "center",
    alignContent: "center",
  };

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={picture}
              alt="Logo"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light ">Learning and Growing...</h1>
            <p className="lead text-justify">
              This is my first attempt at creating a react app.
              <br /> It is a basic app in which you can add and/or delete to-dos
              as per your interest.
            </p>
          </div>
        </div>
      </div>
      <div className="social-container" style={socialStyle}>
        <h3
          className="heading"
          style={{ fontFamily: "GoldmanBold", color: "black" }}
        >
          Created by Loveena Ramchandani
        </h3>
        <a
          href="https://www.linkedin.com/in/LoveenaRamchandani/"
          className="linkedin social"
          style={{
            margin: "0 1rem",
            alignItems: "center",
            transition: "transform 250ms",
            display: "inline-block",
            color: "#0077b5",
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Loveena28"
          className="github social"
          style={{
            margin: "0 1rem",
            alignItems: "center",
            transition: "transform 250ms",
            display: "inline-block",
            color: "#000",
          }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
};
