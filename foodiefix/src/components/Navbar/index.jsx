import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
          <h1 className="navbar-logo">FoodieFIX</h1>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="dishes"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Dishes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="menu"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="reviews"
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="nav-link"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;