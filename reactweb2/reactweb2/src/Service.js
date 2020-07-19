import React from 'react';
import Sdata from '../src/Demo/Sdata';
import Card from './Card';

import './App.css';

const Service = () => {
  return (
    <React.Fragment> 
        <div className="my-5">
            <h1 className="text-center services"> Our Services</h1>
            <hr />
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {Sdata.map((val, ind) => {
                            return <Card key={val} imgsrc = {val.imgsrc} title = {val.title} brief={val.brief}/>
                            })}
                    </div>
                </div>
            </div>
    </div>
    </React.Fragment> 
  );
}

export default Service;