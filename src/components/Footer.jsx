import React from "react";
import Logo from "../assets/images/AurumLogo.png";
import "./Footer.css";
import "aos/dist/aos.css";
import Wave from 'react-wavify'
const Footer = () => {

    return (
        <>
            <div>
                <Wave
                    fill="#000000"
                    paused={false}
                    style={{ display: 'flex', position: 'relative', zIndex: -1 }}
                    options={{
                        height: 25,
                        amplitude: 20,
                        speed: 0.20,
                        points: 3
                    }}
                />
                <footer className="custom-footer" style={{ position: 'relative', zIndex: 1, background: '#000000' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 footer-brand">
                                <img data-aos="fade-up-right" src={Logo} alt="Company Logo" className="footer-logo" />
                                <p>World-class technical solutions for elevated jewellery store operations.</p>
                            </div>
                            <div className="col-md-2 footer-links">
                                <h5>QUICKLINKS</h5>
                                <ul data-aos="fade-up-left">
                                    <li><a href="#">Product</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col-md-2 footer-links">
                                <h5>SOLUTIONS</h5>
                                <ul data-aos="fade-up-left">
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
                                        style={{
                                            background: "linear-gradient(45deg, #2E7D32, #FFB74D)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            textDecoration: "none"
                                        }}
                                    >
                                        support@atts.in
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p>
                                Aurumm made by
                                <a
                                    href="https://atts.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: "linear-gradient(45deg, #2E7D32, #FFB74D)",
                                        WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
                                        textDecoration: "none"
                                    }}
                                >
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


// import React from "react";
// import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimations.tsx";

// const Footer = () => {
//     return (
//         <>
//             <h1>Footer</h1>
//             <BackgroundGradientAnimation>
//                 <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
//                     <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
//                         Gradients X Animations
//                     </p>
//                 </div>
//             </BackgroundGradientAnimation>
//         </>
//     );
// };

// export default Footer;
