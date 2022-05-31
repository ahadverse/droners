import { Container, Divider, Typography } from "@mui/material";
import React, { Component } from "react";
import './Company.css'
import Slider from "react-slick";
import { Box } from "@mui/system";


const img4 = 'https://www1.djicdn.com/dps/de46652dd99c67d4f8d17607e3bf0dce.jpg'
const img1 = 'https://snpi.dell.com/snp/images2/300/en-us~Parrot/Parrot.jpg'
const img2 = 'https://unlimitedrone.com/wp-content/uploads/2016/10/yuneec-logo.jpg'
const img3 = 'https://yt3.ggpht.com/ytc/AKedOLTTvs72Eo44SJYxvrmD4gN7ULFxX3nHLF-301ns=s900-c-k-c0x00ffffff-no-rj'
const img5 = 'https://mms.businesswire.com/media/20160126005092/en/505823/5/kespry_CMYK_LOGO%2BTAG%283%29.jpg'
const img6 = 'https://cdn.shopify.com/s/files/1/0788/2361/collections/AutelRobotics_Logo_1200x630.jpg?v=1481842990'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Container className="slider">
        <Typography sx={{color: '#009432' , mt: 10 , fontWeight:'700'}} gutterBottom variant="h3" component="div">
            Some Drones Company
        </Typography>
        <Slider {...settings}>
          <Box>
          <img className="img" width="600px" height="300px" src={img4}  alt="" />
          <h1>DJI</h1>
          <h6>Founded: 2001</h6>
          <h5>Founder : Frank Wang</h5>
         
          </Box>
          
          <div>
          <img className="img" width="600px" height="300px" src={img1}  alt="" />
            <h1>Parrot</h1>
            <h6>Founded: 1991</h6>
            <h5>Founder : Henri Seydoux,</h5>
          </div>
          <div>
          <img className="img" width="600px" height="300px" src={img2}  alt="" />
          <h1>Yuneec </h1>
            <h6>Founded: 1999</h6>
            <h5>Founder : Henri Seydoux,</h5>
          </div>
          <div>
          <img className="img" width="600px" height="300px" src={img3}  alt="" />
          <h1>DroneDJ</h1>
            <h6>Founded: 2006</h6>
            <h5>Founder : Seth Weintraub</h5>
          </div>
          <div>
          <img className="img" width="600px" height="300px" src={img5}  alt="" />
          <h1>Kespry</h1>
            <h6>Founded: 2013</h6>
            <h5>Founder : Krishnan Hariharan</h5>
          </div>
          <div>
          <img className="img" width="600px" height="300px" src={img6}  alt="" />
          <h1>AutelRobo</h1>
            <h6>Founded: 2014</h6>
            <h5>Founder : Randall Warnas</h5>
          </div>
        </Slider>
      </Container>
    );
  }
}