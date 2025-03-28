import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "../assets/images/AurumLogo.png";
import "./Footer.css";
import "aos/dist/aos.css";
import Wave from "react-wavify";

const Footer = () => {
    return (
        <>
            <div>
                <Wave
                    fill="#000000"
                    paused={false}
                    style={{ display: "flex", position: "relative", zIndex: -1 }}
                    options={{
                        height: 25,
                        amplitude: 20,
                        speed: 0.2,
                        points: 3,
                    }}
                />
                <footer className="custom-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 footer-brand">
                                <img data-aos="fade-up-right" src={Logo} alt="Company Logo" className="footer-logo" />
                                <p>World-class technical solutions for elevated jewellery store operations.</p>
                            </div>

                            <div className="col-md-2 footer-links">
                                <h5>QUICKLINKS</h5>
                                <ul>
                                    <li><a href="#">Product</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2 footer-links">
                                <h5>SOLUTIONS</h5>
                                <ul>
                                    <li><a href="#">AU Pay</a></li>
                                    <li><a href="#">AU Sales</a></li>
                                    <li><a href="#">AU Shop</a></li>
                                </ul>
                            </div>

                            <div className="col-md-4 footer-contact">
                                <h5>CONTACT</h5>
                                <p>0422 4957575</p>
                                <h5>Email</h5>
                                <p>
                                    <a
                                        href="mailto:support@atts.in"
                                        className="gradient-text"
                                    >
                                        support@atts.in
                                    </a>
                                </p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p>
                                Aurumm made by
                                <a href="https://atts.in" target="_blank" rel="noopener noreferrer" className="gradient-text">
                                    <b> ATTS Technologies</b>
                                </a>
                                . All Rights Reserved © {new Date().getFullYear()}.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;
