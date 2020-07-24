import React from 'react';
import img from "../src/images/about.jpg";
import Common from "./Common";
import './App.css';

const About = () => {
  return (
    <React.Fragment> 
      <Common name = "Grow your business with" imgsrc={img} visit="/contact" btname=" Contact Us" />
    </React.Fragment> 
  );
}

export default About;