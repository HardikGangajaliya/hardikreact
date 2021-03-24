import React from "react";
import Common from "./Common";
import img from "./img/computer-animate.png";
const Home = () => {
  return (
    <Common
      imgsrc={img}
      btn="Get Started"
      name="Grow your business with "
      visit="/service"
    />

  );
};

export default Home;
