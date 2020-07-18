import React from 'react';
import img from "../src/images/home.jpg";
import Common from "./Common";
import './App.css';

const Home = () => {
  return (
    <React.Fragment> 
      <Common name = "Grow your business with " imgsrc={img} visit="/service" btname=" Get Started" />
    </React.Fragment> 
  );
}

export default Home;