import React from "react";
import Common from "./Common";
import mypic from "./img/111.jpg";
const About = () => {
  return <Common imgsrc={mypic}
    btn="Contact Us"
    name="Welcome to my website"
    visit="/contact"
  />;
};

export default About;
