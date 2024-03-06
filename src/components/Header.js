import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img loading="prelaod" decoding="async" className="img-fluid" width="160" src="images/logo.png" alt="Wallet" /> */}
            <h1>ZDart<span>.</span></h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/how-it-works">How It Works</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Legal</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/FAQ">FAQ's</Link></li>
                  <li><Link className="dropdown-item" to="/Disclaimer">Disclaimer</Link></li>
                  <li><Link className="dropdown-item" to="/terms">Terms &amp; Condition</Link></li>
                  <li><Link className="dropdown-item" to="/privacy-policy">Privacy &amp; Policy</Link></li>
                </ul>
              </li>
            </ul>
            {/* account btn */}
            <Link to="#!" className="btn btn-outline-primary"></Link>
            {/* account btn */}
            <Link to="/contact" className="btn btn-primary ms-2 ms-lg-3">Get a Quote</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
