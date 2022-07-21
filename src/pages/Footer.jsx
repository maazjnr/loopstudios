import React, {useEffect} from "react";
import Facebook from '../images/icons/icon-facebook.svg';
import Twitter from '../images/icons/icon-twitter.svg';
import Pintrest from '../images/icons/icon-pinterest.svg';
import Instagram from '../images/icons/icon-instagram.svg';
import Aos from "aos";
import "aos/dist/aos.css";



const Footer1 = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);


    return(
        <div className="Footer" data-aos="zoom-in">
           <section className="footer-1" data-aos="flip-up">
            <h1>Loopstudios</h1>
            <div className="icons">
                <img src={Facebook} alt='facebook' />
                <img src={Twitter} alt='twitter' />
                <img src={Pintrest} alt='Pintrest' />
                <img src={Instagram} alt='instagram' />
            </div>
           </section>

           <section className="footer-2">
                <div className="about-companies" >
                    <span>About</span>
                    <span>Careers</span>
                    <span>Events</span>
                    <span>Products</span>
                    <span>Support</span>
                </div>

                <p>&copy; loopstudios maazjnr. All right Reserved</p>
           </section>
        </div>
    )
}

export default Footer1