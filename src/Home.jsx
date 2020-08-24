import React from 'react';
import web from "../src/Images/s1.jpg";
import { NavLink } from 'react-router-dom';
import Common from "./Common";

const Home=()=>{
return(
   <>
     <Common name="Welcome to Home Page"
    imgsrc={web}
     visit='/services' 
    btnname="Get Started"/>
  
  </>

);
};

export default Home;