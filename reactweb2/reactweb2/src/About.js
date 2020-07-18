import React from 'react';
import img from "../src/images/about.jpg";
import Common from "./Common";
import './App.css';

const About = () => {
  return (
    <React.Fragment> 
      <Common name = "Welcome to " imgsrc={img} visit="/contact" btname=" Contact Us" />
    </React.Fragment> 
  );
}

export default About;