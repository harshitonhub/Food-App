import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        GeeksforGeeks, Sector-137
                        Noida, Uttar Pradesh, India<br/ ><br />
                        <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +91 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:contactus@food.net">
                        contactus@food.net</a>
                        </address>
                    </div>
                </div>
                <br />
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2023 Indian Restaurant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;