import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section-sm bg-tertiary">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="footer-widget">
                            <h5 className="mb-4 text-primary font-secondary">Service</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="service-details.html">Personal loans</a></li>
                                <li className="mb-2"><a href="service-details.html">Home Equity Loans</a></li>
                                <li className="mb-2"><a href="service-details.html">Student Loans</a></li>
                                <li className="mb-2"><a href="service-details.html">Mortgage Loans</a></li>
                                <li className="mb-2"><a href="service-details.html">Payday Loans</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="footer-widget">
                            <h5 className="mb-4 text-primary font-secondary">About</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#!">Benefits</a></li>
                                <li className="mb-2"><a href="#!">Careers</a></li>
                                <li className="mb-2"><a href="#!">Our Story</a></li>
                                <li className="mb-2"><a href="#!">Team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 mb-4">
                        <div className="footer-widget">
                            <h5 className="mb-4 text-primary font-secondary">Help</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="contact.html">Contact Us</a></li>
                                <li className="mb-2"><a href="faq.html">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 newsletter-form">
                        <div style={{ backgroundColor: '#F4F4F4', padding: '35px' }}>
                            <h5 className="mb-4 text-primary font-secondary">Subscribe</h5>
                            <div className="pe-0 pe-xl-5">
                                <form action="https://formcarry.com/s/OAJf1BfBSbu" method="post" name="mc-embedded-subscribe-form" target="_blank">
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
                            <p className="mb-0">Lorem ipsum dolor sit amet, rdghds consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-5 text-center text-md-start">
                    <div className="col-lg-4">
                        <Link to="/ZDart">
                            {/* <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="images/logo.png" alt="Wallet" /> */}
                            <h1>ZDart<span>.</span></h1>
                        </Link>

                    </div>
                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                        <ul className="list-unstyled list-inline mb-0 text-lg-center">
                            <li className="list-inline-item me-4"><a className="text-black" href="privacy-policy.html">Privacy Policy</a></li>
                            <li className="list-inline-item me-4"><a className="text-black" href="terms.html">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
                        <ul className="list-unstyled list-inline mb-0 social-icons">
                            <li className="list-inline-item me-3"><a title="Explorer Facebook Profile" className="text-black" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item me-3"><a title="Explorer Twitter Profile" className="text-black" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                            <li className="list-inline-item me-3"><a title="Explorer Instagram Profile" className="text-black" href="https://instagram.com/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
