import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Article1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="articles" data-aos="flip-up">
      <section>
        <div className="creation-btn">
          <h1>OUR CREATION</h1>
          <button className="see-more-btn">
             <Link to="home">
            See More
            </Link>
          </button>
        </div>
      </section>

      <section>
        <div className="image-row" data-aos="zoom-in">
          <div className="image1" data-aos="fade-right">
            <h2>DEEP EARTH</h2>
          </div>
          <div className="image2" data-aos="fade-left">
            <h2>NIGHT ARCADE</h2>
          </div>
          <div className="image3" data-aos="flip-left">
            <h2>SOCCER TEAM VR</h2>
          </div>
          <div className="image4" data-aos="fade-right">
            <h2>FROM UP ABOVE VR</h2>
          </div>
        </div>

        <div className="image-row2">
          <div className="image5" data-aos="flip-up">
            <h2>THE GRID</h2>
          </div>
          <div className="image6" data-aos="fade-left">
            <h2>POCKET BOREALIS</h2>
          </div>
          <div className="image7" data-aos="flip-left">
            <h2>THE CURIOSITY</h2>
          </div>
          <div className="image8" data-aos="fade-right">
            <h2>MAKE IT FISHEYE</h2>
          </div>
          <button className="down-btn">
            <Link to="home">
            See More
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Article1;
