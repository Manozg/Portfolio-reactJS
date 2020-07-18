import React from 'react';
import img from '../src/images/appdevelopment.jpg'
import {NavLink} from 'react-router-dom';
import './App.css';

const Card = (props) => {
  return (
    <React.Fragment> 

                <div className="row gy-4 card">
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}  />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"> {props.title} </h5>
                            <hr />
                            <p className="card-text"> {props.brief} </p>
                            <NavLink to="/" className="btn btn-primary"> Know More </NavLink>
                        </div>
                        </div>
                    </div>
                </div>

    </React.Fragment> 
  );
}

export default Card;