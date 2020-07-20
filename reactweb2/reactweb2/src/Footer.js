import React from 'react';
import { NavLink } from 'react-router-dom';


function Footer () {
    return (
        <React.Fragment>
        <footer className="bg-light text-center col-12 mx-auto footer">
        <div>
            <br />
            <h3>Social Media</h3>
                <NavLink className="btn btn-social-icon btn-instagram" to="/http://instagram.com/"><i className="fa fa-instagram" /></NavLink>{' '}
                <NavLink className="btn btn-social-icon btn-facebook" to="/http://www.facebook.com/"><i className="fa fa-facebook" /></NavLink>{' '}
                <NavLink className="btn btn-social-icon btn-twitter" to="/http://twitter.com/"><i className="fa fa-twitter" /></NavLink>{' '}
                <NavLink className="btn btn-social-icon btn-google" to="/http://youtube.com/"><i className="fa fa-youtube" /></NavLink> 
        </div>
        <br />
        </footer>
        </React.Fragment>
    )
}

export default Footer;