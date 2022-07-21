import React, { useEffect } from "react";
import AboutImg from "../images/desktop/image-interactive.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about">
      <section className="about-container" data-aos="zoom-out">
        <div className="about-img">
          <img className="image" src={AboutImg} alt="" />
        </div>

        <div className="about-details">
          <h1>THE LEADER IN INTERACTIVE VR </h1>
          <p data-aos="fade-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award wining creations have transformed businesses through
            through digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
