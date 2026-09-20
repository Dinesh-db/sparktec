import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Column */}
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <span>SPARKTEC</span>
                        <small>LOCOMOTIVES</small>
                    </Link>
                    <p className="footer-tagline">
                        From Spares to Service - We Deliver. Industrial locomotive maintenance, spare parts supply, and operational support.
                    </p>
                    <div className="proprietor-info">
                        Proprietor: Rajeshkumar G
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/om">O&M Solutions</Link></li>
                        <li><Link to="/industries">Industries</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Solutions Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Solutions</h4>
                    <ul className="footer-links">
                        <li><span>Locomotive Spares Supply</span></li>
                        <li><span>Mechanical & Electrical AMC</span></li>
                        <li><span>Pneumatic & Hydraulic Repairs</span></li>
                        <li><span>Engine & Gearbox Overhaul</span></li>
                        <li><span>Turnkey O&M Services</span></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="footer-col">
                    <h4 className="footer-heading">Contact Info</h4>
                    <p className="footer-contact-item">
                        <strong>Phone:</strong><br />
                        <a href="tel:+917010248952">+91-7010248952</a> / <a href="tel:+917845908952">+91-7845908952</a>
                    </p>
                    <p className="footer-contact-item">
                        <strong>Email:</strong><br />
                        <a href="mailto:sparktec.sales@gmail.com">sparktec.sales@gmail.com</a>
                    </p>
                    <p className="footer-contact-item">
                        <strong>Address:</strong><br />
                        T.V.S Complex, Shop No.3, Secretariat Colony, Padhuvanchery, Chennai - 600126
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {new Date().getFullYear()} Sparktec Locomotives. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;