import React from 'react';
import img from "../src/images/home.jpg";
import {NavLink} from "react-router-dom";
import './App.css';

const Common = (props) => {
  return (
    <React.Fragment> 
      <section id="header" className="d-flex align-items-center justify-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2 header-img animated d-flex ">
                            <img src={props.imgsrc} className="img-fluid" alt={props.img}/>
                        </div>
                        <div className="col-md-6 mt-5  pt-lg-0 order-2 order-lg-1" >
                            <h1> {props.name} <strong className="brand-name"> Ultimate Solution</strong></h1>
                            <hr />

                            <h2 className="my-3"> We are here to find solutions for your business. </h2>
                            <hr />
                          
                            <h4 className="my-3"> Explore our services </h4>
                            <hr />
                        </div>
                    </div>
                      <div className="mt-0 home-btn">
                              <NavLink to={props.visit} className=" btn btn-primary home-btn"> {props.btname} </NavLink>
                      </div>
                </div>

            </div>
        </div>
      </section>
    </React.Fragment> 
  );
}

export default Common;