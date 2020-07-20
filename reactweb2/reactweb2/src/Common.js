import React from 'react';
import img from "../src/images/home.jpg";
import {NavLink} from "react-router-dom";
import './App.css';

const Common = (props) => {
  return (
    <React.Fragment> 
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                        <div className="col-md-6 pt-5 pb-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                            <h1> {props.name} <strong className="brand-name"> Ultimate Solution</strong></h1>
                            <hr />
                            <h2 className="my-3"> We are here to find solutions for your business. </h2>
                            <hr />
                            <h3> Explore our services</h3>
                            <hr />
                            <div className="mt-3 mb-3 home-btn">
                              <NavLink to={props.visit} className=" btn btn-primary home-btn"> {props.btname} </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 mb-5 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt={props.img}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </React.Fragment> 
  );
}

export default Common;