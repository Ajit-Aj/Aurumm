import React, { useState, useEffect } from "react";
import Logo from "../assets/images/AurumLogo.png";
import "./Navbar.css";
import "./HeroSales.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg glassy-navbar sticky-top ${isScrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Company Logo" className="navbar-logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setNavbarCollapsed(!isNavbarCollapsed)}
                    >
                        {isNavbarCollapsed ? <FaBars className="menu-icon" /> : <FaTimes className="close-icon" />}
                    </button>


                    <div className={`collapse navbar-collapse ${isNavbarCollapsed ? "" : "show"}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li
                                className="nav-item dropdown me-3"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <a className="nav-link dropdown-toggle" href="#">
                                    Product & Features
                                </a>
                                <ul className={`dropdown-menu animated-dropdown ${isDropdownOpen ? "show" : ""}`}>
                                    <li><a className="dropdown-item" href="#feature1">AuPay</a></li>
                                    <li><a className="dropdown-item" href="#feature2">AuShops</a></li>
                                    <li><a className="dropdown-item" href="#feature3">AuSales</a></li>
                                </ul>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item heartbeat">
                                <a className="nav-link nav-cta" href="#demo">Get a Free Demo</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="hero-content text-center">
                <div data-aos="zoom-out">
                    <h1 className="section-title">AU Sales</h1>
                    <h2 className="hero-heading">Where Luxury Meets Seamless Inventory Management.</h2>
                </div>
                <div className="breadcrumb">
                    <span>Home &gt; </span>
                    <span>Product & Features &gt; </span>
                    <span className="breadcrumb-active">Au Sales</span>
                </div>
            </div>
        </>

    );
};

export default Navbar;
