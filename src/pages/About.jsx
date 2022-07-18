import React from "react";
import AboutImg from '../images/desktop/image-interactive.jpg';

const About = () => {

    return(
        <div className="about">
            <section className="about-container">

                <div className="about-img">
                    <img className="image" src={AboutImg} alt='' />
                </div> 

                <div className="about-details">
                    <h1>THE LEADER IN  INTERACTIVE VR</h1>
                    <h5>
                        Founded in 2011, Loopstudios has been producing
                        world-class virtual reality projects for some
                        of the best companies around the globe. Our award
                        wining creations have transformed businesses through
                        through digital experiences that bind to their brand.
                    </h5>
                </div>
            </section>
        </div>
    )
}

export default About