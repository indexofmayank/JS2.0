import React from 'react';
import "../components/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Jantagroup.org</h4>
                            <ul>
                                <li>Head Office: I-177 Sukanto Nagar Salt Lake Sector - 4 Kolkata-98</li>
                                <li>Bihar</li>
                                <li>Bokaro</li>
                                <li>Ranchi</li>
                                <li>Hyderabad</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">AtalTinkering Lab</a></li>
                                <li><a href="#">Artificial Intelligence </a></li>
                                <li><a href="#">Shop With Us</a></li>
                                <li><a href="#">Enroll Now</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><a href="#">Online Summer Camp</a></li>
                                <li><a href="#">Online Coding classNamees</a></li>
                                <li><a href="#">Online AI & MI Courses </a></li>
                                <li><a href="#">Oline Robo Learning</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address" />
                                        <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2023 <a href="#">Janta Group</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer