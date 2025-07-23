import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/banner/banner4.jpg"
import banner2 from "../../assets/banner/banner5.jpg"
import banner3 from "../../assets/banner/banner6.jpg"
import banner4 from "../../assets/banner/banner7.jpg"
import banner5 from "../../assets/banner/banner8.jpg"
const Banner = () => {
    return (
           <div className='pt-2'>
             <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} interval={2000}	>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={banner4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={banner5} />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
           </div>

    );
};

export default Banner;