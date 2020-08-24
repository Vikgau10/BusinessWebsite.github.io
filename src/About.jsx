import React from "react";
import network from "./Images/s5.jpg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";


const About=()=>{
    return(
  <>
    <Common name="Welcome to About Page" 
    imgsrc={network}
     visit='/contact' 
    btnname="contact now"/>
  
  </>
    );

};
export default About;