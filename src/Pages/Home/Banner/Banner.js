import React, { useState } from 'react';
import Slider from 'react-slick';
import './Banner.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const img = 'https://i.ibb.co/5R4STZm/imgbin-mavic-pro-unmanned-aerial-vehicle-dji-quadcopter-phantom-png.png';
const img1 = 'https://i.ibb.co/tK08TTv/imgbin-mavic-pro-unmanned-aerial-vehicle-agriculture-agricultural-drones-pesticide-png.png';
const img2 = 'https://i.ibb.co/b7tYcJL/imgbin-mavic-pro-dji-spark-unmanned-aerial-vehicle-quadcopter-png.png';
const img3 = 'https://i.ibb.co/w423Jd6/imgbin-helicopter-rotor-quadcopter-unmanned-aerial-vehicle-gopro-png.png';
const img4 = 'https://i.ibb.co/mCs8hcy/imgbin-helicopter-quadcopter-unmanned-aerial-vehicle-gopro-camera-png.png';
const img5 = 'https://i.ibb.co/Kj4RQSc/imgbin-fpv-quadcopter-mavic-pro-unmanned-aerial-vehicle-first-person-view-png.png';

const images =[img, img1 , img2, img3, img4, img5]


const Banner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

 
    return (
        <div className="app2">
            <Typography variant="h3" sx={{fontWeight:'700', color:'goldenrod' , pt:10}}>
            Welcome To Droners
            </Typography>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <img height="400px" className={img} src={img} alt={img} />
              
            </div>
            
          ))}
          
        </Slider>
       
       
      </div>

    );
};

export default Banner;