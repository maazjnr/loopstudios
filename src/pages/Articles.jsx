import React from "react";


const Article1 = () => {

    return(
        <div className="articles">
            <section>
                <div className="creation-btn">
                    <h1>OUR CREATION</h1>
                    <button className="see-more-btn">See More</button>
                </div>
            </section>

            <section>

                <div className="image-row">
                    <div className="image1"><h2>DEEP EARTH</h2></div>
                    <div className="image2"><h2>NIGHT ARCADE</h2></div>
                    <div className="image3"><h2>SOCCER TEAM VR</h2></div>
                    <div className="image4"><h2>FROM UP ABOVE VR</h2></div>
                </div>

                <div className="image-row2">
                    <div className="image5"><h2>THE GRID</h2></div>
                    <div className="image6"><h2>POCKET BOREALIS</h2></div>
                    <div className="image7"><h2>THE CURIOSITY</h2></div>
                    <div className="image8"><h2>MAKE IT FISHEYE</h2></div>
                </div>

                <button className="down-btn">See More</button>
            </section>
        </div>
    )
}

export default Article1