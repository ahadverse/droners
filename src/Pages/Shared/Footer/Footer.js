import React from 'react';
import { AiFillFacebook, AiFillSkype, AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className="">
         <div className="contract" sx={{pt:5, fontSize:3}}>
           <h1>Contract Us</h1>
           <AiOutlineGoogle className="fab"/>
           <AiOutlineGithub className="fab" />
           <AiFillSkype className="fab"/>
           <AiFillFacebook className="fab" />
           
     
         </div>
        
      </div>
                <div className="footer-logo" sx={{pt:5}}>
                <h5>Drones overall will be more impactful than I think people recognize, in positive ways to help society. 
                Visual artists use drones to capture beautiful new images and camera angles.
                As a pilot, I can tell you drones may be a lot of things; airplanes they are not.
                The Iranians have shot down drones</h5>
                </div>
        <div className="copyright pt-5">
            <p>Copyright 2021. All Right Reserved</p>
        </div> 
    </div>
    );
};

export default Footer;