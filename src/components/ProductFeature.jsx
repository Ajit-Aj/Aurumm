import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    FaSyncAlt, FaNetworkWired, FaFileInvoice, FaCog, FaBarcode, FaBoxes,
    FaShoppingCart, FaClipboardList, FaUsers, FaBuilding, FaCalendarCheck,
    FaChartLine, FaShieldAlt, FaBell, FaChartBar, FaLock
} from "react-icons/fa"; 
import "./product.css";

const ProductFeature = () => {
    return (
        <>
            <h3 className="main-heading">Features</h3>
            <Section
                topic1="Real-Time Integration of HO & Branches"
                topic2="Seamlessly sync operations between headquarters and branches for efficient management."
                sub1={{ text: "Seamless Communication", icon: <FaNetworkWired /> }}
                sub2={{ text: "Centralized Control", icon: <FaSyncAlt /> }}
            />
            <Section
                topic1="Estimation & Billing"
                topic2="Streamline the process of estimating costs and generating bills for smooth transactions."
                sub1={{ text: "Customizable Templates", icon: <FaFileInvoice /> }}
                sub2={{ text: "Automated Processes", icon: <FaCog /> }}
            />
            <Section
                topic1="Stock & RFID Inventory Management"
                topic2="Utilize RFID technology for precise inventory tracking and efficient stock management."
                sub1={{ text: "Precision Tracking", icon: <FaBarcode /> }}
                sub2={{ text: "Efficient Stock Control", icon: <FaBoxes /> }}
            />
            <Section
                topic1="Order Management"
                topic2="Simplify order processing and tracking to enhance customer service and satisfaction."
                sub1={{ text: "Streamlined Processing", icon: <FaShoppingCart /> }}
                sub2={{ text: "Enhanced Tracking", icon: <FaClipboardList /> }}
            />
            <Section
                topic1="Karighar Management"
                topic2="Effectively manage artisans and workshops to ensure smooth production processes."
                sub1={{ text: "Artisan Coordination", icon: <FaUsers /> }}
                sub2={{ text: "Workshop Oversight", icon: <FaBuilding /> }}
            />
            <Section
                topic1="Staff Management"
                topic2="Efficiently handle employee scheduling, performance tracking, and payroll management."
                sub1={{ text: "Schedule Optimization", icon: <FaCalendarCheck /> }}
                sub2={{ text: "Performance Tracking", icon: <FaChartLine /> }}
            />
            <Section
                topic1="HUID"
                topic2="Implement unique identifiers for products to enhance security and streamline inventory management."
                sub1={{ text: "Unique Product Identification", icon: <FaShieldAlt /> }}
                sub2={{ text: "Proactive Alerts", icon: <FaBell /> }}
            />
            <Section
                topic1="Scheduled Report & Notification"
                topic2="Stay informed with scheduled reports and timely notifications for better decision-making and operational efficiency."
                sub1={{ text: "Timely Insights", icon: <FaChartBar /> }}
                sub2={{ text: "Enhanced Security Measures", icon: <FaLock /> }}
            />

            <br />
            <br />
        </>
    );
};

export default ProductFeature;

function Section({ topic1, topic2, sub1, sub2 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <>
            <hr
                style={{
                    border: "none",
                    borderLeft: "2px solid black",
                    height: "50px",
                    width: "0",
                    margin: "10px auto"
                }}
            />
            <section ref={ref}>
                <div
                    className="maintopic"
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                    }}
                >
                    <h3>{topic1}</h3>
                    <p>{topic2}</p>
                </div>
                <div className="subtopics">
                    <div
                        className="subtopic1"
                        style={{
                            transform: isInView ? "none" : "translateX(-200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >
                        {sub1.icon}
                        <p style={{ margin: 0 }}>{sub1.text}</p>
                    </div>
                    <div
                        className="subtopic1"
                        style={{
                            transform: isInView ? "none" : "translateX(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >
                        {sub2.icon}
                        <p style={{ margin: 0 }}>{sub2.text}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
