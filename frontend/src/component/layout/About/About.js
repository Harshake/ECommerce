import React from "react";
import "./aboutSection.css";
import { Typography } from '@material-ui/core';

const About = () => {
  const visitInstagram = () => {
    window.location = "";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            
          </div>
          <div className="aboutSectionContainer2">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
