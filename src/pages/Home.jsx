import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import SalesImg from "../assets/Images/SalesImg.svg";
import FeatureCards from "../components/FeatureCards";
import Carousel from "../components/Carousel";
import ProductFeature from "../components/ProductFeature";

const Home = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setScale(Math.max(0.6, 1 - scrollY / 800));
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>

      <div className="text-center">
        <section className="sales-hero container-fluid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-content">
                <h1 className="gradient-text">
                  <TypeAnimation
                    sequence={[
                      "AU SALES",
                      1000,
                      "Hybrid ERP Magic",
                      1000,
                      "Inventory Excellence",
                      1000,
                      "AU SALES",
                    ]}
                    wrapper="span"
                    speed={60}
                    repeat={Infinity}
                    className="animated-title"
                  />
                </h1>
                <h3 className="section-heading">
                  Inventory Management Excellence <br /> In Every Tap
                </h3>
                <p className="section-description">
                  At AURUMM, we understand the artistry and precision that goes into every piece of jewellery. AU Sales is a testament to that understanding, offering an unparalleled solution for managing your jewellery store inventory.
                </p>
                <p className="section-description">
                  With a focus on simplicity and sophistication, AU Sales streamlines your operations and makes tracking your inventory the easiest it has ever been: allowing you to focus on what truly matters—your craft.
                </p>

              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={SalesImg}
                  alt="AU Sales"
                  className="sales-image img-fluid"
                  style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.5s ease-out",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <FeatureCards />
        <br />
        <br />
        <ProductFeature />
        {/* <Carousel /> */}

        <style>
          {`
          .gradient-text {
            background: linear-gradient(45deg, #2E7D32, #FFB74D);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            display: inline-block;
          }
        `}
        </style>
      </div>

    </>
  );
};

export default Home;
