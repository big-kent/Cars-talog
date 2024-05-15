import { Link } from "react-router-dom";
import Logo from "../images/navbar/car-rental-logo.png";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <nav>
        {/* mobile hamburger menu */}
        <div className={`mobile-navbar ${hamburgerMenu ? "open-nav" : ""}`}>
          <div onClick={handleHamburgerMenu} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={handleHamburgerMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerMenu} to="/about">
                Features
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerMenu} to="/our-team">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleHamburgerMenu} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop navbar */}

        <div className="navbar">
          <div className="navbar-logo">
            <Link className="navbar-logo-container" to="/">
              <img src={Logo} alt=" Carstalog Logo" />
              <div className="navbar-logo-text">
                <span>Cars</span>
                <h3>Talog</h3>
              </div>
            </Link>
          </div>

          <ul className="navbar-links-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About us</Link>
            </li>
            <li>
              <Link to="our-team">Our team</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>

          <div className="navbar-right">
            <Link className="navbar-right-sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar-right-register" to="/">
              Register
            </Link>
          </div>
          {/* mobile hamburger icon */}
          <div className="mobile-hamb" onClick={handleHamburgerMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

// Change all a tags to Link elements with route paths
