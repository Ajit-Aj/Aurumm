import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar, FaUsers, FaChartLine, FaPuzzlePiece } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FeatureCards.css";

const features = [
    {
        icon: <FaStar className="icon text-danger" />,
        title: "Comprehensive Inventory Management",
        description:
            "Efficiently track, manage, and optimize your jewellery inventory with advanced features tailored for the jewellery industry.",
    },
    {
        icon: <FaUsers className="icon text-primary" />,
        title: "Customer-Centric Approach",
        description:
            "Deliver exceptional customer experiences through personalized services and tailored recommendations, fostering long-term relationships.",
    },
    {
        icon: <FaChartLine className="icon text-success" />,
        title: "Real-Time Analytics",
        description:
            "Gain valuable insights into sales trends, customer preferences, and inventory performance, empowering data-driven decision-making for business growth.",
    },
    {
        icon: <FaPuzzlePiece className="icon text-warning" />,
        title: "Seamless Integration",
        description:
            "Integrate seamlessly with existing systems and platforms, ensuring a smooth transition and maximizing operational efficiency.",
    },
];

const FeatureCards = () => {
 

    return (
        <div className="feature-container">
            <h6 className="sub-heading">Why Aurumm - AU Pay?</h6>
            <h2 className="main-heading">Transform Your Jewelry Experience with AU Pay</h2>
            <br />
            <div className="feature-grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                    >
                        <div className="icon-container">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;
