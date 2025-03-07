import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo/zdart.svg";

const Footer = () => {
    return (
        <footer className="section-sm bg-tertiary">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="footer-widget">
                            <h5 className="mb-4 text-primary font-secondary">Our Service</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/ServiceDetails01">Web Design & Development</a></li>
                                <li className="mb-2"><a href="/ServiceDetails02">scalable App solutions</a></li>
                                <li className="mb-2"><a href="/ServiceDetails03">UI/UX</a></li>
                                <li className="mb-2"><a href="/ServiceDetails04">Quality Assurance</a></li>
                                <li className="mb-2"><a href="/ServiceDetails05">Cloud Solutions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="footer-widget">
                            <h5 className="mb-4 text-primary font-secondary">Help & Support</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="/contact">Contact Us</a></li>
                                <li className="mb-2"><a href="/FAQ">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 newsletter-form">
                        <div style={{ backgroundColor: '#F4F4F4', padding: '35px' }}>
                            <h5 className="mb-4 text-primary font-secondary">Connect with Us</h5>
                            <div className="pe-0 pe-xl-5">
                                <form action="https://formcarry.com/s/mr4nrbqVt5R" method="post" name="mc-embedded-subscribe-form" target="_blank">
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control shadow-none bg-white border-end-0" placeholder="Email address" name="email" />
                                        <span className="input-group-text border-0 p-0">
                                            <button className="input-group-text border-0 bg-primary" type="submit" name="subscribe" aria-label="Subscribe for Newsletter">
                                                <i className="fas fa-arrow-right"></i>
                                            </button>
                                        </span>
                                    </div>
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                        <input type="text" name="b_463ee871f45d2d93748e77cad_a0a2c6d074" tabIndex="-1" />
                                    </div>
                                </form>
                            </div>
                            <p className="mb-0">
                                Stay updated with ZDart’s latest software solutions, industry insights, and exclusive offers. Subscribe to our newsletter and let’s build the future of technology together!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-5 text-center text-md-start">
                    <div className="col-12 col-lg-4 text-center text-lg-start">
                        <Link to="/" className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <img
                                loading="preload"
                                decoding="async"
                                className="img-fluid me-1"
                                width="50"
                                src={Logo}
                                alt="ZDart"
                            />
                            <h1 className="mb-0">ZDart<span>.</span></h1>
                        </Link>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <ul className="list-unstyled list-inline mb-0 text-center text-lg-center">
                            <li className="list-inline-item me-4"><a className="text-black" href="/privacy-policy">Privacy Policy</a></li>
                            <li className="list-inline-item me-4"><a className="text-black" href="/terms">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 text-center text-md-end mt-4 mt-md-0">
                        <ul className="list-unstyled list-inline mb-0 social-icons">
                            <li className="list-inline-item me-3">
                                <a title="Send an Email" className="text-black"
                                    href="mailto:zdart2026@gmail.com?subject=Inquiry&body=Hello, I would like to know more about...">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </li>
                            <li className="list-inline-item me-3">
                                <a title="Explore LinkedIn Profile" className="text-black" href="https://www.linkedin.com/company/zdart/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="list-inline-item me-3">
                                <a title="Explore Instagram Profile" className="text-black" href="https://www.instagram.com/zdart.tech?igsh=NDdzbnhmYnVkZ2Ft">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <p className="mb-0 text-black">
                            © <span style={{ fontWeight: 'bold' }}>ZDart</span> 2025. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;