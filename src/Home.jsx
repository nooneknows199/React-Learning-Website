import React from "react";
import web from "../src/images/img2.jpg";
import Commom from "./Commom";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Commom
        name="Learn"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <Service/>
      <About/>
      <Contact/>
    </>
  );
};

export default Home;
