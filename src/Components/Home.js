import React from "react";
import Slider from "react-slick";
import img1 from "../Images/Home.jpg";
import img2 from "../Images/Home2.jpg";
import img3 from "../Images/Home3.jpg";
var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
};
function Home(){
        return (
            <div className="gmaps-frame" style={{margin:`0px 0px`}}>
                <Slider {...settings}>
                    <div>
                        <img className="home-img" src={img1} alt="Home-img" height="300px" width="100%" />
                    </div>
                    <div>
                        <img className="home-img" src={img2} alt="Home-img" height="300px" width="100%" />
                    </div>
                    <div>
                        <img className="home-img" src={img3} alt="Home-img" height="300px" width="100%" />
                    </div>
                </Slider>
            </div>
        );
}
export default Home;