import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/zdart.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when main menu toggles
    if (!isMenuOpen) {
      setIsPricingOpen(false);
      setIsLegalOpen(false);
    }
  };

  const togglePricing = (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsPricingOpen(!isPricingOpen);
      setIsLegalOpen(false); // Close the other dropdown
    }
  };

  const toggleLegal = (e) => {
    e.preventDefault();
    if (window.innerWidth < 992) {
      setIsLegalOpen(!isLegalOpen);
      setIsPricingOpen(false); // Close the other dropdown
    }
  };

  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
        <div className="container">
          {/* Brand Section - Logo & Text */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              loading="preload"
              decoding="async"
              className="img-fluid"
              width="50"
              src={Logo}
              alt="ZDart"
            />
            <h1 className="ms-2 mb-0">ZDart<span>.</span></h1>
          </Link>

          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/how-it-works">How It Works</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  onClick={togglePricing}
                  aria-expanded={isPricingOpen}
                >
                  Pricing
                </a>
                <ul className={`dropdown-menu ${isPricingOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/ServicePriceDetails01">Web Design & Development</Link></li>
                  <li><Link className="dropdown-item" to="/ServicePriceDetails02">scalable App Solutions</Link></li>
                  <li><Link className="dropdown-item" to="/ServicePriceDetails03">UI/UX</Link></li>
                  <li><Link className="dropdown-item" to="/ServicePriceDetails04">Quality Assurance</Link></li>
                  <li><Link className="dropdown-item" to="/ServicePriceDetails05">Cloud Solutions</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  onClick={toggleLegal}
                  aria-expanded={isLegalOpen}
                >
                  Legal
                </a>
                <ul className={`dropdown-menu ${isLegalOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/FAQ">FAQ's</Link></li>
                  <li><Link className="dropdown-item" to="/Disclaimer">Disclaimer</Link></li>
                  <li><Link className="dropdown-item" to="/terms">Terms & Condition</Link></li>
                  <li><Link className="dropdown-item" to="/privacy-policy">Privacy & Policy</Link></li>
                </ul>
              </li>
            </ul>

            {/* Account Button */}
            <Link to="#!" className="btn btn-outline-primary"></Link>

            {/* Get a Quote Button */}
            <Link to="/contact" className="btn btn-primary ms-2 ms-lg-3">Get a Quote</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;