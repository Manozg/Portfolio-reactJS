import React from 'react';
import img from "../src/images/home.jpg";
import Common from "./Common";
import './App.css';

const Home = () => {
  return (
    <React.Fragment> 
      <Common name = "Welcome to ..........." imgsrc={img} visit="/service" btname=" Get Started" />
    </React.Fragment> 
  );
}

export default Home;