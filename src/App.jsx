import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMouseMove, useValue, animate } from "react-ui-animate";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const CURSOR_SIZE = 20;
const TRAIL_COUNT = 15;
const OFFSET_X = 0;
const OFFSET_Y = 0;

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const x = useValue(0);
  const y = useValue(0);

  const trails = Array.from({ length: TRAIL_COUNT }).map(() => ({
    x: useValue(0),
    y: useValue(0),
  }));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useMouseMove(({ mouseX, mouseY }) => {
    if (isMobile) return;
    x.value = mouseX - CURSOR_SIZE / 2 - OFFSET_X;
    y.value = mouseY - CURSOR_SIZE / 2 + OFFSET_Y;

    trails.forEach((trail, index) => {
      const delay = (index + 1) * 40;
      setTimeout(() => {
        trail.x.value = mouseX - (CURSOR_SIZE - index * 1.8) / 2 - OFFSET_X;
        trail.y.value = mouseY - (CURSOR_SIZE - index * 1.8) / 2 + OFFSET_Y;
      }, delay);
    });
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      {!isMobile &&
        trails.map((trail, index) => (
          <animate.div
            key={index}
            style={{
              position: "fixed",
              width: CURSOR_SIZE - index * 1.8,
              height: CURSOR_SIZE - index * 1.8,
              // background: "#000000",
              background: "rgb(0, 0, 0)",
              // boxShadow: "0 0 10px rgba(252, 239, 126, 0.68)",
              borderRadius: "50%",
              translateX: trail.x.value,
              translateY: trail.y.value,
              pointerEvents: "none",
              opacity: 1 - index * 0.08,
              zIndex: 9999,
            }}
          />
        ))}

      <Router>
        <div >
          <Navbar />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
